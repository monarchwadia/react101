import React, { Component } from 'react';
import CountdownClock from './components/CountdownClock';

// lets set our date to New Year's 2019
const newYear = new Date('January 1, 2019');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        {/*
          Now we're passing two props to CountdownClock.

          'label' is a string prop, so we can pass it in without curly braces
          You can pass strings, numbers, and booleans without curly braces, as long
          as they aren't stored in variables (i.e., they are "literals")

          To pass variables and objects, you need to use curly braces.

          These props can be accessed inside `CountdownClock.render()` through the
          `this.props` object.
        */}
        <CountdownClock
          label="Time to New Year's 2019"
          date={newYear}
        />
      </div>
    );
  }
}

export default App;
