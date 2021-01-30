import React from "react";

import { Divider } from "antd";

const Status = ({ room }) => {
  return (
    <Divider className="status-bar">
      <div className="online-status">
        <img
          className="onlineIcon"
          src="../../resources/green-online-ico.png"
          alt="online status"
        />
        <h4>{room}</h4>
      </div>
    </Divider>
  );
};

export default Status;
