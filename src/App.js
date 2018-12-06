import React, { Component } from 'react';

import Calendar from './components/Calendar';
import Email from './components/Email';
import News from './components/News';
import Todo from './components/Todo';
import Weather from './components/Weather';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Calendar />
        <Email />
        <News />
        <Todo />
        <Weather />
      </div>
    );
  }
}

export default App;
