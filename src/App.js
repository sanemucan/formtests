import React, { Component } from 'react';
import './App.css';
import { NameForm } from './components/NameForm';

class App extends Component {
  render() {
    return <NameForm txt="Name" />;
  }
}

export default App;
