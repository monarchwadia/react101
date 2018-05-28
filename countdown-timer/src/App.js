import React, { Component } from 'react';
import CountdownClock from './components/CountdownClock';
import DateDropdown from './components/DateDropdown';

// The options get passed into the DateDropdown
const INITIAL_STATE = {
  options: [
    {
      name: 'Tomorrow',
      date: new Date('May 29, 2018 00:00:00')
    },
    {
      name: 'Canada Day 2018',
      date: new Date('July 1, 2018 00:00:00')
    },
    {
      name: 'Christmas 2018',
      date: new Date('December 25, 2018 00:00:00')
    },
    {
      name: 'New Year 2019',
      date: new Date('January 1, 2019 00:00:00')
    }
  ],
  // Notice that selected starts off as 'null' in this stage.
  selected: null
}

class App extends Component {
  // As per React convention, we initialize the state inside the constructor
  constructor() {
    super();
    this.state = INITIAL_STATE;
  }

  // As per React convention, this method handles the onChange event
  // that is forwarded up by the DateDropdown.
  // This function is where the option switching actually happens.
  handleDropdownChange(value) {
    // find the option that matches the value.
    const newOption = this.state.options.find(x => x.name === value);

    // Do not directly set the state. Rather, use setState.
    this.setState({selected: newOption});
  }

  render() {
    // We're going to extract the date and name into variables, for convenience
    const options = this.state.options;
    const selected = this.state.selected;
    const date = selected && selected.date;
    const name = selected && selected.name;

    // We create the label based on the name
    const label = `Time to ${name}`;

    // pass the options down into the CountdownClock
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <DateDropdown 
          options={options} 
          selected={selected} 
          onChange={event => this.handleDropdownChange(event)}
        />
        <br/><br/>
        {
          /* This block renders nothing if nothing is selected. Otherwise it renders CountdownClock. */
          selected && 
          <CountdownClock
            label={label}
            date={date}
          />
        }
      </div>
    );
  }
}

export default App;
