import React, { useState } from "react";
import { Divider } from "antd";
import Contacts from "../user/Contacts";
import OpenConversation from "./OpenConversation";

export default function Dashboard({ userId }) {
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

  return (
    <Divider className="dashboard">
      {/* <Contacts userId={userId} /> */}
      <OpenConversation />
    </Divider>
  );
}
