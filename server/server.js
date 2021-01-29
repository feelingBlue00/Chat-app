const { Console } = require("console");
const express = require("express");
const uploadFile = require("express-fileupload");

const socketio = require("socket.io");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./user");

const http = require("http");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
    allowHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("New connection");

  socket.on("conversation", ({ id, room }, callback) => {
    const { error, user } = addUser({ conversationId: socket.id, id, room });

    if (error) return callback(error);

    socket.emit("message", {
      user: "sender",
      text: `${user.id}, room: ${user.room}`,
    });

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "sender", text: `${user.id} has joined` });

    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.id, text: message });

    callback();
  });

  socket.on("Disconnect", () => {
    console.log("User had left the room");
  });
});

app.use(uploadFile());
app.use(router);

app.post("/upload", (req, res) => {
  if (req.files == null) {
    return res.status(400).json({ msg: "No file upload" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
