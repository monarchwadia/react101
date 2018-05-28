import React, { Component } from 'react';

// We import CountdownClock here
import CountdownClock from './components/CountdownClock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        {/* 
          You comment in React using an open block. 
          Blocks can do a lot more than just comment. 
          We'll see more of these blocks in later stages.

          Look at how CountdownClock is inserted as a tag 
          on the following line.

          In the next stage, we'll see how to pass parameters
          to CountdownClock.
        */}
        <CountdownClock />
      </div>
    );
  }
}

export default App;
