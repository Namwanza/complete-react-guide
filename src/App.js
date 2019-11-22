import React, { Component } from 'react';
import './App.css';

// import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    // persons: [
    //   { name: 'Ronnie', age: 26 },
    //   { name: 'Namwanza', age: 27 },
    //   { name: 'Madinah', age: 25 }
    // ],
    // someOtherStates: 'Some other state !'
    username: 'superRonnie !'
  }
  
  // switchNameHandler = (newName) => {
  //   // console.log('Clicked Me!')
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 27 },
  //       { name: "Mbeiza", age: 50 },
  //       { name: "Julius", age: 35 },
  //     ],
  //   })
  // }

  // changeNameHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: "Julius", age: 27 },
  //       { name: event.target.value, age: 50 },
  //       { name: "Julius", age: 35 },
  //     ],
  //   })
  // }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>Hi, this is React App!</h1>
        <p>This is really working !</p>
        <button 
          style = {style}
          onClick={() => this.switchNameHandler('Maximilian!')}>
          Switch Name
        </button>
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
        /> */}
        <UserInput changeUsername = {this.changeUsernameHandler} />

        <UserOutput userName = {this.state.username}/>
        <UserOutput userName = {this.state.username}/>
        <UserOutput userName="Ronnie !"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is React!'))
  }
}
export default App;
