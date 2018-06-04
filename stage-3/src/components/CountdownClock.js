import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountdownClock extends Component {

  render() {
    // save the props in variables, for clarity
    const date = this.props.date;
    const label = this.props.label;

    // calculate how much time is left
    const now = new Date();
    const timeLeftMs = date - now;

    // render the results
    return (
      <div className="countdown-clock">
        { label }
        <br/>
        { timeLeftMs }
      </div>
    );
  }
}

// PropTypes is a standard React library that helps make your code safer
// by making sure your props are as expected.
// The Workhaus Academy React course dives deep into PropTypes
// and other best practices, so that you can become a better 
// developer and write cleaner, safer, better code.
CountdownClock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  color: PropTypes.string.isRequired
}

export default CountdownClock;