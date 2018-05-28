import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

// We have moved the `render` invocation into its own function
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// Call `render` 100 times per second.
// That's it, now the countdown timer will update.
setInterval(render, 10);

unregister();
