// React is a required import for all files that use React's syntax (i.e., JSX syntax)
// Component is a base React class that is extended to create custom components
import React, { Component } from 'react';

// Here, we create the CountdownClock component, which is imported and used in App.js
class CountdownClock extends Component {

  // Anything returned by render() is printed to the DOM. 
  // render() should do nothing except form an output and return it.
  // It is intended to be what is called a "pure" function.
  render() {

    return (
      // React uses 'className' because 'class' is a reserved keyword in JavaScript
      <div className="countdown-clock">
        0 days, 0 hours, 0 minutes, 0 seconds
      </div>
    );

  }
}

export default CountdownClock;