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
      temp: []
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

      weatherApi.weather.getAllWeather((err, temp) => {
          // if (err) {
          //     return "Can't get temperature";
          // }
          // console.log(temp);
          this.setState({ temp: temp.main });
      });
  }

  render() {
    console.log(this.state.news);
    return (
      <div className="Wrapper">
        <h1>Ten Cadence Dashboard</h1>
        <div className="App Grid-container">
          <Weather temp={this.state.temp}/>
          <News news={this.state.news} />
          <Todo todos={this.state.todos} />
          <Calendar />
          <Email />
        </div>
      </div>
    );
  }
}

export default App;