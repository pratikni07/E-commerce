const Cart = require("../models/Cart");
const Product = require("../models/Product");
const User = require("../models/User");

// add product to cart
exports.addProductToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
    const user = await User.findById(req.user.id);
    let cart = user.cart;
    // check if the product is already in the cart
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product == productId) {
        return res.status(400).json({
          success: false,
          message: "Product already in cart",
        });
      }
    }
    // create a new item and push it to the cart array
    const newItem = {
      product: productId,
      quantity,
    };
    cart.push(newItem);
    await user.save();
    res.status(201).json({
      success: true,
      message: "Product added to cart",
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = await User.findById(req.user.id);
    let cart = user.cart;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product == productId) {
        cart.splice(i, 1);
        break;
      }
    }
    await user.save();
    res.status(200).json({
      success: true,
      message: "Product removed from cart",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// check out product from cart and create order in orders collection add order to user order array and empty the cart , order may content multiple product check out all product here is order schema :
exports.checkout = async (req, res) => {
  try {
    const { address, payment } = req.body;
    const userId = req.user.id;

    const userCart = await Cart.findOne({ user: userId }).populate(
      "items.product"
    );

    if (!userCart || userCart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty. Add items to cart before checkout.",
      });
    }

    // Prepare order items from the cart
    const orderItems = userCart.items.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    // Create a new order
    const newOrder = new Order({
      user: userId,
      items: orderItems,
      address,
      payment,
      status: "Pending", // Set initial status as "Pending"
    });

    await newOrder.save();
    await User.findByIdAndUpdate(userId, { $push: { orders: newOrder._id } });
    userCart.items = [];
    await userCart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully.",
      order: newOrder,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process the order. Please try again.",
    });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).populate("orders");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const userOrders = user.orders;

    res.status(200).json({
      success: true,
      orders: userOrders,
    });
  } catch (error) {
    console.error("Get user orders error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user orders. Please try again.",
    });
  }
};
