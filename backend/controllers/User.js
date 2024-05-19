const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Cart = require("../models/Cart")
const Wishlist = require("../models/Wishlist")
const OTP  = require("../models/OTP")
const otpGenerator = require("otp-generator")
// registsers a new user get name email password confirmation password and phone number
exports.registerUser = async (req, res) => {
  try {
    // firstName, lastName, email, phoneNumber, password, confirmPassword, otp,
    const { firstName, lastName, email, phoneNumber, password, confirmPassword,otp } =req.body;
    const name = firstName +" "+ lastName;
    const phoneno = phoneNumber;
    const confirmationPassword = confirmPassword

    // Validate the request
    if (!name || !email || !password || !phoneno) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check for existing user with the same email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Validate password confirmation
    if (password !== confirmationPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const recentOTP = await OTP.findOne({ email }).sort({ createdAt: -1 });
    if (!recentOTP || recentOTP.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    // create cart 
    const newCart = new Cart();
    await newCart.save();
    // create wishlist
    const newWishlist = new Wishlist();
    await newWishlist.save();
    // create user
    const newUser = new User({
      name,
      phoneno,
      email,
      password: hashedPassword,
      cart: newCart._id,
      wishlist: newWishlist._id,
    });

    // Save the new user to the database
    await newUser.save();
    newCart.user = newUser._id;
    newWishlist.user = newUser._id;
    await newCart.save();
    await newWishlist.save();

    // Return success response with token and user data
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;

    const checkUserPresent = await User.findOne({ email });
    if (checkUserPresent) {
      return res
        .status(401)
        .json({ success: false, message: `User is Already Registered` });
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);

    res
      .status(200)
      .json({ success: true, message: `OTP Sent Successfully`, otp });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// login using email and password
exports.login = async (req, res) => {
  try {
    // Get email and password from request body
    const { email, password } = req.body;

    // Check if email or password is missing
    if (!email || !password) {
      // Return 400 Bad Request status code with error message
      return res.status(400).json({
        success: false,
        message: `Please Fill up All the Required Fields`,
      });
    }

    // Find user with provided email
    const user = await User.findOne({ email });

    // If user not found with provided email
    if (!user) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    // Generate JWT token and Compare Password
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: `Password is incorrect` });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: `Login Failure Please Try Again` });
  }
};
// login using phone number and otp
exports.loginWithPhoneNumberAndOtp = async (req, res) => {
  try {
    const { phoneno, otp } = req.body;

    // Validate the request
    if (!phoneno || !otp) {
      return res.status(400).json({
        success: false,
        message: "Phone number and OTP are required",
      });
    }

    // Find user by phone number
    const user = await User.findOne({ phoneno });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // Validate OTP
    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { phoneno: user.phoneno, id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Save token to user document in database (optional)
    user.token = token;
    await user.save();

    // Set cookie for token
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options);

    // Send success response
    res.status(200).json({
      success: true,
      token,
      user,
      message: "User login successful",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// add address
exports.addAddress = async (req, res) => {
  try {
    const { address, city, state, country, pincode } = req.body;

    // Validate the request
    if (!address || !city || !state || !country || !pincode) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find the user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Create a new address object
    const newAddress = {
      address,
      city,
      state,
      country,
      pincode,
    };

    // Add the new address to the user's address array
    user.addresses.push(newAddress);

    // Save the user to update the address array
    await user.save();

    // Send success response with updated user data
    res.status(201).json({
      success: true,
      message: "Address added successfully",
      user,
    });
  } catch (error) {
    console.error("Add address error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// update an address
exports.updateAddress = async (req, res) => {
  try {
    const { address, city, state, country, pincode } = req.body;
    const { id } = req.params;

    // Validate the request
    if (!address || !city || !state || !country || !pincode) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find the user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Find the address by ID
    const foundAddress = user.addresses.find(
      (addr) => addr._id.toString() === id
    );
    if (!foundAddress) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    // Update the address fields
    foundAddress.address = address;
    foundAddress.city = city;
    foundAddress.state = state;
    foundAddress.country = country;
    foundAddress.pincode = pincode;

    // Save the user to update the address
    await user.save();

    // Send success response with updated user data
    res.status(200).json({
      success: true,
      message: "Address updated successfully",
      user,
    });
  } catch (error) {
    console.error("Update address error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// delete an Address from a User's address array
exports.deleteUserAddress = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Find the index of the address to delete
    const index = user.addresses.findIndex(
      (addr) => addr._id.toString() === id
    );
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: "Address not found",
      });
    }

    // Remove the address from the addresses array
    user.addresses.splice(index, 1);

    // Save the user to update the addresses array
    await user.save();

    // Send success response with updated user data
    res.status(200).json({
      success: true,
      message: "Address deleted successfully",
      user,
    });
  } catch (error) {
    console.error("Delete address error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// fetch all addresses of a user
exports.getAllUserAddresses=async(req, res)=> {
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      addresses: user.addresses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

// forgot password using phone no and verify otp and update password
exports.forgotPassword = async(req, res)=> {
  try {
    const { phoneno, otp, password, confirmationPassword } = req.body;

    // Validate request fields
    if (!phoneno || !otp || !password || !confirmationPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find user by phone number
    const user = await User.findOne({ phoneno });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Validate OTP
    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Validate password confirmation
    if (password !== confirmationPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user's password
    user.password = hashedPassword;

    // Clear the OTP field in the user document
    user.otp = null;

    // Save the updated user object
    await user.save();

    // Send success response
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

// change password
exports.changePassword= async(req, res)=> {
  try {
    const { oldPassword, newPassword, confirmationPassword } = req.body;

    // Validate required fields
    if (!oldPassword || !newPassword || !confirmationPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find the user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Validate old password
    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid old password",
      });
    }

    // Validate new password and confirmation
    if (newPassword !== confirmationPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    // Send success response
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (err) {
    console.error("Change password error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}

// update user profile
exports.updateUserProfile = async(req, res) =>{
  try {
    const { name, email, phoneno } = req.body;

    // Validate required fields
    if (!name || !email || !phoneno) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find the user by ID
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Validate email uniqueness
    const isEmailTaken = await User.findOne({ email });
    if (isEmailTaken && isEmailTaken._id.toString() !== req.user.id) {
      return res.status(400).json({
        success: false,
        message: "Email is already taken",
      });
    }

    // Update user details
    user.name = name;
    user.email = email;
    user.phoneno = phoneno;
    await user.save();

    // Send success response
    return res.status(201).json({
      success: true,
      message: "User details updated successfully",
      user,
    });
  } catch (err) {
    console.error("Update user profile error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
