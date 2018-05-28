import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

// revert the changes here
ReactDOM.render(<App />, document.getElementById('root'));

unregister();
