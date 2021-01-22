import React from "react";

import { List } from "antd";

import { useContacts } from "../contexts/ContactsProvider";

export default function Contacts() {
  const { contacts } = useContacts();

  return (
    <List>
      {contacts.map((contact) => (
        <List.Item key={contact.id}>{contact.id}</List.Item>
      ))}
    </List>
  );
}
