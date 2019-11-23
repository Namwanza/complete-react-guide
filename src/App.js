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
    someOtherStates: 'Some other state !',
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    // console.log('Clicked Me!')
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Mbeiza", age: 50 },
        { name: "Julius", age: 35 },
      ],
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Julius", age: 27 },
        { name: event.target.value, age: 50 },
        { name: "Julius", age: 35 },
      ],
    })
  }

  togglePersonsHandler = () => {
    const ShowPerson = this.state.showPersons
    this.setState({showPersons: !ShowPerson})
  }

  render() {
    const style = {
      border: '1px solid lightblue',
      background: 'white',
      padding: '16px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, this is React App!</h1>
        <p>This is really working !</p>
        <button 
          style = {style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        
        {
          this.state.showPersons ?
            <div>
              <Person 
                name = {this.state.persons[0].name} 
                age = {this.state.persons[0].age}
              />
              <Person 
                name = {this.state.persons[1].name} 
                age = {this.state.persons[1].age}
                click = {this.switchNameHandler.bind(this, 'Maxi')}
                changed = {this.changeNameHandler}
                >
                  My hobby is: Coding
              </Person>
              <Person 
                name = {this.state.persons[2].name} 
                age = {this.state.persons[2].age}
              />
            </div>
            :
            null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is React!'))
  }
}
export default App;
