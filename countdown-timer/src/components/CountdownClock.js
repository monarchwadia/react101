import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This is what CountdownClock's state looks like in the beginning
const INITIAL_STATE = {
  timeLeft: 0
}

class CountdownClock extends Component {
  // constructor() is called when the component is created, but before the component is mounted.
  constructor() {
    // super() is a JavaScript requirement
    super();

    // initialize state
    this.state = INITIAL_STATE;
  }

  // componentDidMount is a React Component Lifecycle event.
  // It is called after React initializes the component, but before it writes to the DOM.
  // It is sometimes used to start timers.
  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.props.date;
      const now = new Date();
      const timeLeft = date - now;
      this.setState({ timeLeft:  timeLeft})
    }, 10);
  }

  // componentWillUnmount is a React Component Lifecycle event.
  // It is called before the Component is unmounted from the application.
  // It is commonly used for cleanup tasks, as shown below.
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Technically, render() is also a React Component Lifecycle event.
  // It is called when props or state change.
  render() {
    // save the props in variables, for clarity
    const timeLeft = this.state.timeLeft;
    const label = this.props.label;

    // render the results
    return (
      <div className="countdown-clock">
        { label }
        <br/>
        { timeLeft }
      </div>
    );
  }
}

CountdownClock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  label: PropTypes.string.isRequired 
}

export default CountdownClock;