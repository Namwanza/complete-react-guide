import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Ronnie', age: 26 },
      { name: 'Namwanza', age: 27 },
      { name: 'Madinah', age: 25 }
    ],
    someOtherStates: 'Some other state !'
  }
  
  switchNameHandler = () => {
    // console.log('Clicked Me!')
    this.setState({
      persons: [
        { name: "Ruth", age: 27 },
        { name: "Mbeiza", age: 50 },
        { name: "Julius", age: 35 },
      ],
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, this is React App!</h1>
        <p>This is really working !</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My hobby is: Coding</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is React!'))
  }
}
export default App;
