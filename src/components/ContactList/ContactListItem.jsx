import React, { Component } from 'react';

class ContactListItem extends Component {

    render() {
const { key, contact, number, onDeleteContact } = this.props;

        return (
              <li key={key}>
                {contact}: {number}
                <button onClick={() => onDeleteContact(contact)}>Delete</button>
          </li>
        )
    }
}

export default ContactListItem;