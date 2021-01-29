import React, { useState } from "react";
import axios from "axios";

const UpLoadFile = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");
  const [upLoadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
};

export default UpLoadFile;
