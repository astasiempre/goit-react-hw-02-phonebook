// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
import React, { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    console.log(event.target.name)
    console.log('event: ', event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    })
  };

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
          <button type="submit">Add contact</button>
        </form>
      
    );
  }
}
export default App;
