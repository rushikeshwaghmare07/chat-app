const express = require("express");
const http = require("http");
require("dotenv").config();
const path = require("path");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000

app.use(express.static("./public"));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
})

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
})


