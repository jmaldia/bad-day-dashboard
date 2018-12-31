import React, { Component } from 'react';

import Calendar from './components/Calendar';
import Email from './components/Email';
import News from './components/News';
import Todo from './components/Todo';
import Weather from './components/Weather';

import './App.css';

import * as newsApi from './apis/newsApi';
import * as toDoApi from './apis/toDoApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: '',
      news: []
    };
  }

  componentDidMount() {
    toDoApi.getAllTodos()
      .then(todos => {
        this.setState({
          todos
        });
        // console.log(todos);
      });
    
    newsApi.getNews()
      .then(news => {
        console.log(news)
        this.setState({
          news
        });
      }); 
  }

  render() {
    return (
      <div className="App">
        <Calendar />
        <Email />
        <News news={this.state.news} />
        <Todo todos={this.state.todos} />
        <Weather />
      </div>
    );
  }
}

export default App;