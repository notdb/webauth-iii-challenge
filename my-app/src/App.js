import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Signup.js";
import Signup from "./components/Signin.js";
import ListOfUsers from "./components/ListOfUsers.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/users">List of Users</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/users" component={ListOfUsers} />
        </main>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };
}

export default withRouter(App);
