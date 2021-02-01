import React from "react";

import { Card, Typography } from "antd";

import "../../css/Message.css";

const { Text } = Typography;

const Message = ({ message: { text, user }, name }) => {
  let sentByMe = false;

  if (user === name.trim().toLowerCase()) {
    sentByMe = true;
  }

  return sentByMe ? (
    <div className="messageContainer-me">
      <p className="sentText">{name}</p>
      <Card
        style={{ width: 300, alignItems: "right" }}
        className="message-by-me"
      >
        <Text className="content">{text}</Text>
      </Card>
    </div>
  ) : (
    <div className="messageContainer-guest">
      <p classNme="sentText">{user}</p>
      <Card
        style={{ width: 300, alignItems: "left" }}
        className="message-by-guest"
      >
        <Text className="content">{text}</Text>
      </Card>
    </div>
  );
};

export default Message;
