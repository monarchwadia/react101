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

CountdownClock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  // Fixed by changing `color` to `label`. No more errors, 
  // and now `label` is being checked for.
  label: PropTypes.string.isRequired 
}

export default CountdownClock;