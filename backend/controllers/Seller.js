// calculate total earing of seller by adding all the orders
const HeroSlider = require("../models/Design/HeroSlider")
const cloudinary = require("../config/cloudinary")

exports.totalEarning = async (req, res) => {
  try {
    const orders = await Order.find();
    let totalEarning = 0;
    for (let i = 0; i < orders.length; i++) {
      totalEarning += orders[i].payment;
    }
    return res.status(200).json({
      success: true,
      data: totalEarning,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};

// fetch all the orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};

// get outoufstock products
exports.getOutOfStockProducts = async (req, res) => {
  try {
    const products = await Product.find({ stock: 0 });
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};

// seller design


exports.addHomePageSlider = async(req,res)=>{
  try {
    const {image} = req.body
    const {title, description, url, category, subcategory, discount } = req.body.homeSliderData;

    // validate
    if (!image || !title || !description || !url || !category || !subcategory || !discount) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields",
      });
    }


    const cloudinary_res = await cloudinary.uploader.upload(image, {
      folder: "/ecommerce/heroslider",
      public_id: title 
    });

    const imageUrl = cloudinary_res.secure_url;
    const heroSlider = new HeroSlider({
      image:imageUrl,
      title,
      description,
      url,
      category,
      subcategory,
      discount,
    });
    await heroSlider.save();
    return res.status(200).json({
      success: true,
      data: heroSlider,
      message:"Hero Added"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
}

exports.getHomePageSlider = async(req,res)=>{
  try {

    const heroSlider = await HeroSlider.find().populate("category").populate("subcategory");
    res.status(201).json({
      success: true,
      message: "Get Home Slider",
      data: heroSlider,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
}
exports.deleteHomePageSlider = async(req,res)=>{
  try {
    const heroSlider = await HeroSlider.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      data: heroSlider,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error,
    });
  }
}