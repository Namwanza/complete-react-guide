import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';

import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  border: 2px solid lightblue;
  padding: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;
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
    let Persons = null;

   // changing styles dynamically
   const classes = [];
   if ( this.state.persons.length <= 2 ) {
    classes.push('red');
   }

   if ( this.state.persons.length <= 1) {
     classes.push('bold');
   }

   // end of dynamic styles 

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
          },)}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, this is React App!</h1>
        <p className={classes.join(' ')}>This is really working !</p>
        <StyledButton alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>

        {Persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is React!'))
  }
}
export default App;
