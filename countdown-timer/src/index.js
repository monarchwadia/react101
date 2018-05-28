import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

setInterval(render, 10);

unregister();
