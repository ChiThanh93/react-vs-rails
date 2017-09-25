import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

import App from './App';

const router = (
  <Router history={browserHistory}>
    <Route path="/" comonent={App}/>
  </Router>
);
export default router;
