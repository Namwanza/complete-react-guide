import React, { useEffect, useRef } from 'react';

import AuthContext from '../context/Auth-Context';

import './Cockpit.css';

const Cockpit = ( props ) => {
  //  using useRef
  const toggleBtnRef = useRef(null);


  // using useEffect
  useEffect( () => {
    console.log('[Cockpit.js] useEffect');
    // here you can run http request if you want
    // setTimeout ( () => {
    //   alert("saved data into the cloud !")
    // }, 1000)

    // call toggleBtnRef on click
    toggleBtnRef.current.click();

   return() => {
    console.log('[Cockpit.js] I can render some code to the dom')
  }
   
  }, [])


    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = "Red";
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( "red" ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( "bold" ); // classes = ['red', 'bold']
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>

           <AuthContext.Consumer>
             {
                (context) => <button onClick={context.login}>log in</button>
             }
           </AuthContext.Consumer>
        </div>
    );
};

export default Cockpit;