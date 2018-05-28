import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DateDropdown extends Component {
  // handleChange is responsible for handling the raw change event that is thrown by the select element.
  // The value of the new option is immediately forwarded to the parent.
  handleChange(event) {
    const value = event.target.value;

    this.props.onChange(value);
  }

  render() {
    const selected = this.props.selected;
    const options = this.props.options;

    const name = selected ? selected.name : '';

    // map the options into dropdown elements
    const dropdownOptions = options.map(option => {
      return (
        <option 
          // The key is needed by React in order to support its rendering algorithm.
          // Each key has to be unique.
          // Key is only required when rendering objects from an array.
          key={option.name} 
          value={option.name}
        >
          {option.name}
        </option>
      );
    });

    // add a blank option at index 0, for unselected
    dropdownOptions.unshift(<option value='' key=''></option>);

    return (
      <select 
        value={name}
        onChange={event => this.handleChange(event)}
      >
        { dropdownOptions }
      </select>
    )
  }
}

const OptionPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired
});

DateDropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: OptionPropType,
  options: PropTypes.arrayOf(OptionPropType).isRequired
}

export default DateDropdown;