import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./core/Home";
import Admin from "./core/Admin";

//Redux
import store from "./store";
import { Provider } from "react-redux";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="grid-container">
          <header>
            <Link to="/">React Shopping Cart</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Home} exact />
          </main>
          <footer>All right is reserved.</footer>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
