import React, { Component } from 'react';

class ContactList extends Component {
  render() {
      const { contacts, filter, onDeleteContact } = this.props;
      
     

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
                {contact.name}: {contact.number}
                <button onClick={onDeleteContact(contact.name)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}


export default ContactList;
