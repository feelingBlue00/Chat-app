import React, { Fragment } from "react";

import { Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const UploadFile = () => {
  const props = {
    name: "file",
    multiple: false,
    accept: "image/*",
    action: "http://localhost:5000/file",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} uploaded successfully`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed`);
      }
    },
  };

  return (
    <Fragment>
      <Dragger {...props} style={{ width: 80 }}>
        <UploadOutlined />
      </Dragger>
    </Fragment>
  );
};

export default UploadFile;
