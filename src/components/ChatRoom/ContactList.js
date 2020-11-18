import React from "react";
import PropTypes from "prop-types";

export default class ContactList extends React.Component {
  state = {
    contacts: [],
    searchContact: "",
  };

  handleSearchContact = (event) => {
    this.setState({
      searchContact: event.target.value,
    });
  };

  searchSubmitted = (contact) => {};

  addNewContact = (contact) => {
    const contacts = this.state.contacts;
    contacts.push(contact);
    this.setState({ contacts });
  };

  render() {
    return (
      <div>
        <div className="contact-search">
          <input
            type="text"
            placeholder="Search by name"
            value={this.state.searchContact}
            onChange={(event) => this.handleSearchContact(event)}
          />
        </div>
        <button className="search-button">Button</button>
        <div className="contact-list"></div>
      </div>
    );
  }
}
