// Router.js
import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Admin from './components/admin/Admin';
import AuthContext from './context/AuthContext';

const AppRouter = () => {
  const {loggedIn} = useContext(AuthContext)

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {
          loggedIn == true && (
            <Route path="/admin" component={Admin} />
          )
        }
      </Switch>
    </Router>
  );
};

export default AppRouter;
