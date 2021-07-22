import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Header from './component/layout/header'
import Addtodo from './component/Addtodo';
import Todos from './component/Todos';
import About from './component/pages/About';
// import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    todos: [
      // {id: uuidv4(), title: "FreeMask", completed: false},
      // {id: uuidv4(), title: "FreeMask1", completed: false},
      // {id: uuidv4(), title: "FreeMask2", completed: false}
    ]
  };

componentDidMount() {
  axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }));
}

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

delTodo = id => {
  axios.delete('http://jsonplaceholder.typicode.com/todos/${id}').then(res => this.setState(
    {todos: [...this.state.todos.filter(todo => todo.id !== id)]}
  ));
  
};

AddTodo = title => {
  // const newTodo = {
  //   id: uuidv4(),
  //   title,
  //   completed: false
  // };
  // this.setState({ todos: [...this.state.todos, newTodo]});
  axios.post('http://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  }).then(res => this.setState({ todos: [...this.state.todos, res.data]}));
};

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/ReactApp" render={props => (
              <React.Fragment>
                <div className="container">
                <Addtodo AddTodo={this.AddTodo}/>
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete} 
                delTodo={this.delTodo} />
                </div>
              </React.Fragment>
          )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
