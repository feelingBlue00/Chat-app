import React from "react";
import { Button } from "antd";

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
      <div id="contact-list">
        <Button id="seach-contact-btn" onclick={this.searchContact} />
      </div>
    );
  }
}

export default ContactList;
