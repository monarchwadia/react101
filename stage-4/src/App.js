import React, { Component } from 'react';
import CountdownClock from './components/CountdownClock';

const newYear = new Date('January 1, 2019');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <CountdownClock
          label="Time to New Year's 2019"
          date={newYear}
        />
      </div>
    );
  }
}

export default App;
