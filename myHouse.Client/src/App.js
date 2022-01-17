import './App.css';

import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Estate from './pages/Estate';
import EstateDetail from './components/estatee/EstateDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Register from './pages/Register';
import { User } from './pages/User'
import Welcome from './pages/Welcome';

function App() {

  const [name, setName] = useState("");

  useEffect(() => {
    (
      async () => {
        const response = await fetch("http://localhost:8000/api/user", {
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });

        const content = await response.json();

        setName(content.name);
      }
    )();
  });

  return (
    <Router>
      <div className="App">
        <Navbar name={name} />
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/profile" exact component={Profile}></Route>
        <Route path="/user" exact component={User}></Route>
        <Route path="/estate" exact component={Estate}></Route>
        <Route path="/welcome" exact component={() => <Welcome name={name} />}></Route>
        <Route path="/estate/:id" exact component={EstateDetail}></Route>
      </div>
    </Router>
  );
}

export default App;