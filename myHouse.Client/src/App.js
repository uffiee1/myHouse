/* eslint-disable no-unused-vars */
import './App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/Header"
import Home from './pages/Home';
import RealEstateDetail from "./pages/RealEstateDetail"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/realestate/:id" component={RealEstateDetail}></Route>
      </div>
    </Router>
  );
}

export default App;




// export default class App extends Component {
//   static displayName = App.name;

//   render() {
//     return (
//       <Switch>
//         <Header />
//         <Route path="/" exact component={Home}></Route>
//       </Switch>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
