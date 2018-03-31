import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './footer.css';
import App from './App';
import ExampleAdd from './example/exampleAdd';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/add' component={ExampleAdd} />
    </div>
  </Router>,

  document.getElementById('root')
);
registerServiceWorker();
