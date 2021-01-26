import React from "react";

import { Divider } from "antd";

import Conversation from "./Conversation";

export default function Room({ userId }) {
  return (
    <Divider className="chat-room">
      {userId}
      <Conversation userId={userId} />
    </Divider>
  );
}

//   const contacts = [];
//   const [contactIndex, setContactIndex] = useState(0);
//   const [selectedKey, setSelectedKey] = useState(0);
//   const changeSelectedKey = (event) => {
//     const key = event.key;
//     setSelectedKey(key);
//     setContactIndex(+key);
//   };

// const Contacts = {
//     <Contacts contacts={contacts} selectedKey={selectedKey} changeSelectedKey={changeSelectedKey} />
// };
