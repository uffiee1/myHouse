import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Estate from "./pages/estate/Estate";
import EstateList from "./pages/estateList/EstateList";
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/estate">
            <EstateList />
          </Route>
          <Route path="/estate/:estateId">
            <Estate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
