import React from "react";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Section from "./Components/Section";
import Form from "./Components/Form";
import ContactList from "./Components/ContactList";
import Filter from "./Components/Filter";
import contactsData from "./data/contacts.json";

class App extends Component {
  state = {
    contacts: contactsData,
    filter: "",
  };
  formSubmitHandler = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = { id: uuidv4(), name, number };

    contacts.some(
      (someContact) =>
        someContact.name.toLocaleLowerCase() ===
        contact.name.toLocaleLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };
  onDelete = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  formChangeHandler = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };
  render() {
    const filterContacts = this.filterContacts();
    return (
      <Section>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleOnChange={this.formChangeHandler}
        />
        <ContactList contacts={filterContacts} onDelete={this.onDelete} />
      </Section>
    );
  }
}

export default App;
