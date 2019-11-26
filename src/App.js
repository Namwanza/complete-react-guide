import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'row1', name: 'Ronnie', age: 26 },
      { id: 'row2', name: 'Namwanza', age: 27 },
      { id: 'row3', name: 'Madinah', age: 25 }
    ],
    someOtherStates: 'Some other state !',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const myPerson = [...this.state.persons];
    myPerson.splice(personIndex, 1);
    this.setState({persons: myPerson})
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

    let Persons = null;

    if ( this.state.showPersons ) {
      Persons = (
        <div>
          {this.state.persons.map((myPerson, index) => {
            return (
              <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {myPerson.name} 
                age = {myPerson.age} 
                key = {myPerson.id} 
                changed = {(event) => this.nameChangedHandler(event, myPerson.id)}
              />
            )
          })}
        </div>
      )
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

        {Persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is React!'))
  }
}
export default App;
