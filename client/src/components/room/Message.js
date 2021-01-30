import React from "react";

import { Card, Typography } from "antd";
import ReactEmoji from "react-emoji";

import "../../css/Message.css";

const Message = ({ message: { text, user }, name }) => {
  let sentByMe = false;

  if (user === name.trim().toLowerCase()) {
    sentByMe = true;
  }

  return sentByMe ? (
    <div className="messageContainer">
      <p className="sentText">{name}</p>
      <Card className="message-by-me">
        <Typography className="content">{text}</Typography>
      </Card>
    </div>
  ) : (
    <div className="messageContainer">
      <p classNme="sentText">{user}</p>
      <Card className="message-by-guest">
        <Typography className="content">{text}</Typography>
      </Card>
    </div>
  );
};

export default Message;
