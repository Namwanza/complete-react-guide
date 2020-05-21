import React, { Component } from 'react';

import Aux from '../../hoc/Auxssss';
import WithClass from '../../hoc/withClass';
import './Person.css';

// use prop-types
import PropTypes from 'prop-types'

class Person extends Component {

  componentDidMount() {
    this.inputElement.focus()
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input key="i3"
          // how to use ref
          ref={(inputEl) => { this.inputElement = inputEl }} 
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
      
    )
  }
}

// How to use prop-types
//  this is used in case you will share your component with other developers
//  so as to ensure that they don't break the set props
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, 'Person');
