import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment-countdown'; // install the `countdown()` plugin for moment

class CountdownClock extends Component {

  render() {
    const label = this.props.label;
    const date = this.props.date;

    // render timeLeft as a string now, using `moment` and `moment-countdown`
    const timeLeft = moment(date).countdown().toString();

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