const express = require("express");
const server = express();

const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

const cookieParser = require("cookie-parser");
server.use(cookieParser());


const cors = require("cors");


server.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true
    })
);
server.use(express.json());   
const router = require("./routes/router");
server.use("/api", router);

server.listen(process.env.PORT, () =>
  console.log("Server running on", process.env.PORT)
);
