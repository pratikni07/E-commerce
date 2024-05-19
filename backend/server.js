const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
const connect= require("./config/database")
dotenv.config();
const PORT = 4000;


app.use(bodyParser.json({ limit: '10mb' }));
const userRoute  = require("./routes/UserRoutes")
const categoryRoute = require("./routes/CategoryRoutes")
connect()
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/auth",userRoute)
app.use("/api/v1/category",categoryRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
