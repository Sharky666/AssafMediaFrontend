import React from 'react';
import GameContainer from './components/gameContainer/gameContainer';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/loginPage/loginPage';
import { Route, BrowserRouter as Router, useLocation, Switch } from 'react-router-dom';

function App() {

  // return <LoginPage />
  return (
  <Router>
    <Switch>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route path='/game'>
        <GameContainer />
      </Route>
    </Switch>
  </Router>
  )
}

export default App