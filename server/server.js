const { Console } = require("console");
const express = require("express");
const https = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  socket.emit("Username", socket.username);
  socket.on("Send message", (body) => {
    io.emit("Message", body);
  });
});

server.listen(8000, () => {
  Console.log("Server is listening on port 8000");
});
