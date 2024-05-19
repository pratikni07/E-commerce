import React, { useState } from "react";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import InputOtp from "./OtpInput";
import { useDispatch, useSelector } from "react-redux";
import { setSignupData } from "@/slices/authSlice";
import { sendOtp } from "@/services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { signUp } from "@/services/operations/authAPI";
const SignUpForm = ({ setLog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const { signupData } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    role: "User",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "", // Added phone number field
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, phoneNumber, password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (password !== confirmPassword) {
      console.log("Passwords Do Not Match");
      return;
    }
    // Dispatch action to set signup data and send OTP
    dispatch(setSignupData(formData));
    dispatch(sendOtp(formData.email, navigate));
    setFormData({
      role: "Customer",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
    setIsRegistered(true);
    setShowOTP(true);
  };

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    setLog(true);
    const { role, firstName, lastName, email, phoneNumber, password, confirmPassword } = signupData;
    // Dispatch action to sign up with OTP verification
    dispatch(signUp(role, firstName, lastName, email, phoneNumber, password, confirmPassword, otp, navigate));
  };

  return (
    <div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
          <div className="DialogDescription">
            {isRegistered && showOTP ? (
              <div className="flex flex-col items-center mt-5">
                <p>Enter the OTP sent to your email</p>
                <div className="flex justify-center mt-6">
                  <InputOtp otp={otp} setOtp={setOtp} />
                </div>
                <Button onClick={handleVerifyAndSignup} className="w-[200px] mt-6 mb-6">
                  Verify OTP
                </Button>
              </div>
            ) : (
              <form onSubmit={handleOnSubmit}>
                <div className="flex flex-col gap-2 mt-5 ">
                  <div className="flex justify-between">
                    <div className="w-[calc(50%-0.5rem)]">
                      <label>First Name</label>
                      <br />
                      <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleOnChange}
                        className="p-2 border-2 border-slate-600 rounded-md w-full"
                      />
                    </div>
                    <div className="w-[calc(50%-0.5rem)]">
                      <label>Last Name</label>
                      <br />
                      <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleOnChange}
                        className="p-2 border-2 border-slate-600 rounded-md w-full"
                      />
                    </div>
                  </div>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Mail Here "
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    className="p-2 border-2 border-slate-600 rounded-md"
                  />
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone Number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleOnChange}
                    className="p-2 border-2 border-slate-600 rounded-md"
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password "
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    className="p-2 border-2 border-slate-600 rounded-md active:border-slate-600"
                  />
                  <label>Confirmation Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password "
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleOnChange}
                    className="p-2 border-2 border-slate-600 rounded-md active:border-slate-600"
                  />
                  <Button type="submit" className="active:border-slate-600 mt-5 ">
                    Register
                  </Button>
                </div>
                <p className="flex mt-3">
                  Already Have An Account?{" "}
                  <span
                    onClick={() => {
                      setLog(true);
                    }}
                    className="text-[#394895] font-semibold ml-2"
                  >
                    Login
                  </span>
                </p>
              </form>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </div>
  );
};

export default SignUpForm;
