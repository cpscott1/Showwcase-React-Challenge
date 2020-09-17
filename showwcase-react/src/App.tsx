import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/main' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
