import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

import App from './App';
import Login from './Login'

const router = (
  <Router history={browserHistory}>
    <Route path="users/sign_in" component={Login}/>
    <Route path="/" component={App}/>
  </Router>
);
export default router;
