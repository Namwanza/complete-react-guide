import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonState ] = useState({  // React Hooks
    persons: [
      { name: 'Ronnie', age: 26 },
      { name: 'Namwanza', age: 27 },
      { name: 'Madinah', age: 25 }
    ],
    // someOtherStates: 'Some other state !'
  })

  const [ someOtherState ] = useState('Some other state !') // Array destructuring
  console.log(personsState, someOtherState);

  
  const switchNameHandler = () => {
    // console.log('Clicked Me!')
    setPersonState({
      persons: [
        { name: "Ruth", age: 27 },
        { name: "Mbeiza", age: 50 },
        { name: "Julius", age: 35 },
      ],
    })
  }

  return (
    <div className="App">
      <h1>Hi, this is React App!</h1>
      <p>This is really working !</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My hobby is: Coding</Person>
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is React!'))
}

export default App;
