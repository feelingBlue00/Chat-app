import React, { useState } from "react";
import axios from "axios";

import { Form, Input, Upload } from "antd";

const UpLoadFile = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose file");

  return (
    <React.Fragment>
      <Form>
        <Form.Item className="user-file-upload-field">
          <Input id="user-file" htmlType="file" multiple />
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default UpLoadFile;
