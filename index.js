const { Socket } = require("dgram");
const express = require("express");
const http = require("http");
require("dotenv").config();
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  })
});

app.use(express.static("./public"));

app.get("/", (req, res) => {
  return res.sendFile("/public/index.html");
})

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
})


