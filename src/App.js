import React, { Component } from 'react';

import Calendar from './components/Calendar';
import Email from './components/Email';
import News from './components/News';
import Todo from './components/Todo';
import Weather from './components/Weather';

import './App.css';

import * as newsApi from './apis/newsApi';
import * as toDoApi from './apis/toDoApi';
import * as weatherApi from './apis/weatherApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: '',
      news: [],
      temp: 0
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
        this.setState({
          news
        });
      }); 

      console.log(weatherApi.getAllTemp())
      this.setState({
        temp: weatherApi.getAllTemp()
      });
  }

  render() {
    console.log(this.state.temp)
    return (
      <div className="App">
        <Calendar />
        <Email />
        <News news={this.state.news} />
        <Todo todos={this.state.todos} />
        <Weather temp={this.state.temp}/>
      </div>
    );
  }
}

export default App;