import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './validationComponent/validationComponent'
import Char from './charComponent/charComponent'

class App extends Component {
  state = {
   input: ''
  }

  TextLengthHandler = (event) => {
    const inputText = event.target.value;
    this.setState({input: inputText})
  }

  deleteCharHandler = (index) => {
    const itemList = this.state.input.split('');
    itemList.splice(index, 1);
    const updatedText = itemList.join('');
    this.setState({input: updatedText});
  }

  render() {

    const textInput = this.state.input.split('').map((ch, index) => {
      return (
      <Char 
        character = {ch} 
        key={index}
        clicked = {() => this.deleteCharHandler(index)}
      />)
    })
    return (
      <div className="App">
        <h1>Hi, this is React App!</h1>
        <p>This is really working !</p>
        {/* <button 
          style = {style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {Persons} */}


        <input type="text" 
          onChange = {this.TextLengthHandler} 
          value = {this.state.input}
        />
        <p>{this.state.input}</p>
        <ValidationComponent 
          textLength = {this.state.input.length}
        />

        {textInput}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, this is React!'))
  }
}
export default App;
