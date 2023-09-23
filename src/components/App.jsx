
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/Contactlist';
class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
  };

  handleInputChange = event => {
   
    this.setState({
        [event.target.name]: event.target.value
    })
  };

  
  handleAddContact = (newContact) => {

    const phoneBookHascontact = this.state.contacts.some(
      contact => contact.name === newContact.name);
    
    if (phoneBookHascontact) {
      alert(`${newContact.name}is already in contacts`);
      return;
    };
  

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };
  
  render() {
   const { contacts, filter } = this.state;
    return (
      <div>
        <ContactForm onAddContact={this.handleAddContact} contacts={contacts}/>
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} />
        
      </div>
        
      
    );
  }
}
export default App;