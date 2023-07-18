import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  
  state = {
    contacts: [],
    name: '',
  };

  render () {
    return (
      <div>
      <h1>Phonebook</h1>
      {/* <ContactForm ... /> */}
  
      <h2>Contacts</h2>
      {/* <Filter ... /> */}
      {/* <ContactList ... /> */}
      </div>
    );
  }
}

export default App;