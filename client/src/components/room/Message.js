import React from "react";

import { Divider, Card, Typography } from "antd";

import "../../css/Message.css";

export default function Message({ message, userId }) {
  const isMe = userId === message.userId;

  return (
    <Divider className={`message ${isMe && "message-user"}`}>
      <Card className={isMe ? "message-by-me" : "message-by-guest"}>
        <Typography>{message.text}</Typography>
      </Card>
    </Divider>
  );
}
