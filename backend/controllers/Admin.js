// select no of count of order has status is pending , delivered , shipped

exports.getOrdersCount = async (req, res) => {
  try {
    const orders = await Order.find();
    let pending_count = 0;
    let delivered_count = 0;
    for (let i = 0; i < orders.length; i++) {
      if (orders[i].status === "Pending") {
        pending_count++;
      } else if (orders[i].status === "Delivered") {
        delivered_count++;
      }
    }
    return res.status(200).json({
      success: true,
      data: [
        { name: "pending", value: pending_count },
        { name: "delivered", value: delivered_count },
      ],
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: err,
    });
  }
};
