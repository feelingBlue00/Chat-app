import React from "react";
import { Button, Divider, Input } from "antd";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };

    this.addContactToList = this.addContactToList.bind(this);
    this.searchContact = this.searchContact.bind(this);
  }

  addContactToList(contact) {
    let contact_list = [];
    contact_list = contact_list.push.apply(contact);
    this.setState({ contacts: contact_list });
  }

  searchContact(contact) {}

  render() {
    return (
      <Divider>
        <Input placeholder="Enter your search" autoComplete="off" />
        <Button id="search-contact-btn" onclick={this.searchContact} />
      </Divider>
    );
  }
}

export default ContactList;
