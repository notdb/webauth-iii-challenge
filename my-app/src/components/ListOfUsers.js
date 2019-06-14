import React from "react";
import axios from "axios";

class ListOfUsers extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>
        <h2> Our Users </h2>

        <ul>
          {this.state.users.map(u => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = "http://localhost:5000/api/users";
    const token = localStorage.getItem("jwt");

    /* const headers = {
      Authorization: token
    };
*/
    axios
      .get(endpoint, { headers: { Authorization: token } })
      .then(res => {
        console.log("users", res.data);
        this.setState(() => ({ users: res.data }));
      })
      .catch(({ response }) => {
        console.error("users error", response);
      });
  }
}

export default ListOfUsers;
