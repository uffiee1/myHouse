import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
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

          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
