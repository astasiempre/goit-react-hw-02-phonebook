import React, { Component } from 'react';
import ContactListItem from './ContactListItem'

class ContactList extends Component {
  render() {
      const { contacts, filter, onDeleteContact } = this.props;
      
     

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <ul>
            {filteredContacts.map(contact => (
<ContactListItem
          key={contact.id}
                    contact={contact.name}
                    number={contact.number}
          onDeleteContact={onDeleteContact}
        />
        ))}
      </ul>
    );
  }
}


export default ContactList;
