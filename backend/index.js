const express = require("express");
const app = express();
const pool = require("./config/database");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
    req.pool = pool;
    next();
});

app.listen(5000, () => {
    console.log("Server Running ar port 5000");
});