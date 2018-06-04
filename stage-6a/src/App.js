import React, { Component } from 'react';
import CountdownClock from './components/CountdownClock';

// As per React convention, we define the initial state of the app.
// This is what our App's state is going to look like.
const INITIAL_STATE = {
  // we'll fill in the possible options in the next stage
  options: [], 
  // `selected` is what gets displayed in the app
  // Try changing this and see what happens
  selected: {
    name: 'Christmas 2018',
    date: new Date('December 25, 2018 00:00:00')
  }
}

class App extends Component {
  // As per React convention, we initialize the state inside the constructor
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  render() {
    // We're going to extract the date and name into variables, for convenience
    const date = this.state.selected.date;
    const name = this.state.selected.name;

    // We create the label based on the name
    const label = `Time to ${name}`;

    // pass the options down into the CountdownClock
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <CountdownClock
          label={name}
          date={date}
        />
      </div>
    );
  }
}

export default App;
