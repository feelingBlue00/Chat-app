const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("Server is up and running").status(200);
});

router.post("/file", upload.single("file"), (req, res, next) => {
  return res.json({
    file: req.file.path,
  });
});

module.exports = router;
