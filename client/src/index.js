import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/mathquill/build/mathquill.js';
import '../node_modules/mathquill/build/mathquill.css';
import './index.css';
import './header.css';
import './footer.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
