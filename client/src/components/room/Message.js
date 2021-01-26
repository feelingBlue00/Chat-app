import React from "react";

import { Card, Typography } from "antd";

import "../../css/Message.css";

export default function Message({ message, userId }) {
  const isMe = userId === message.userId;

  return (
    <div className={`message ${isMe && "message-user"}`}>
      <Card className={isMe ? "message-by-me" : "message-by-guest"}>
        <Typography>{message.text}</Typography>
      </Card>
    </div>
  );
}
