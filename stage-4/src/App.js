import React, { Component } from 'react';
import CountdownClock from './components/CountdownClock';

const christmas = new Date('December 25, 2018');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <CountdownClock
          label="Time to Christmas 2018"
          date={christmas}
        />
      </div>
    );
  }
}

export default App;
