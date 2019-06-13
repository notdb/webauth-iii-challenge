import React from "react";
import axios from "axios";

export default class Signup extends React.Component {
  state = {
    username: "name",
    password: "pass"
    // department: "test"
  };

  render() {
    return (
      <>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={this.state.username}
              onChange={this.handleChanges}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleChanges}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <input
              id="department"
              value={this.state.department}
              onChange={this.handleChanges}
              type="department"
            />
          </div>
          <div>
            <button type="submit">Sign up</button>
          </div>
        </form>
      </>
    );
  }

  handleChanges = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:5000/api/auth/register";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("RESPONSE", res.data);
        this.props.history.push("/");
      })
      .catch(error => {
        console.error("ERROR", error);
      });
  };
}
