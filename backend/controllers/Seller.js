// calculate total earing of seller by adding all the orders
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
