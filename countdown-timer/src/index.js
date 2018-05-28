import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// unregistering the service worker fixes hard caching issues in some projects
// registerServiceWorker()
unregister();
