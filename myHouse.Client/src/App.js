/* eslint-disable no-unused-vars */

import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import EstateDetail from './components/estate/EstateDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/welcome" exact component={Welcome}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/profile" exact component={Profile}></Route>
        <Route path="/estate/:id" exact component={EstateDetail}></Route>
      </div>
    </Router>
  );
}

export default App;