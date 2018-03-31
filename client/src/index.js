import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './header.css';
import './footer.css';
import App from './App';
import ExampleAdd from './example/exampleAdd';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { requireAuth } from './utils/AuthService';
import Callback from './Callback';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add' component={ExampleAdd} onEnter={requireAuth}/>
        <Route path="/callback" component={Callback} />
      </div>
    </Router> 
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
