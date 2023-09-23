import React, { Component } from 'react';
import { nanoid } from 'nanoid'

class ContactForm extends Component {
 state = {
    name: '',
    number: '',
  };
   

  handleInputChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    };
    
handleAddContact = () => {
      const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;     

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddContact(newContact);  
          
    this.setState({
        name: '',
        number: '',
    })
    
  }

  render() {
    return (
      <form>
        <h2>Phonebook</h2>
        <label>
          <span>Name</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            name="number"
            required
          />
        </label>
        <button onClick={this.handleAddContact} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;