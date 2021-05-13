import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import Services from './pages/Services';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
        
    </>
  );
}

export default App;
