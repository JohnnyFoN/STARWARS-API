import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfUsers: props.listOfUsers
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      listOfUsers: nextProps.listOfUsers
    });
  }

  populateTable() {
    return this.state.listOfUsers.map((user, index) => {
      const { id, email, first_name, last_name } = user;
      return (
        <tr key={id}>
          <td>{first_name}</td>
          <td>{last_name}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="userData">
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>Last name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.populateTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
/*
<tr>
              <td>Steve</td>
              <td>Roggers</td>
              <td>sr@gmail.com</td>
            </tr>
            <tr>
              <td>Clint</td>
              <td>Barton</td>
              <td>cb@hotmail.com</td>
            </tr>
            <tr>
              <td>Natasha</td>
              <td>Romanov</td>
              <td>nr@gmail.com</td>
            </tr>
            <tr>
              <td>Sam</td>
              <td>Willson</td>
              <td>sw@hotmail.com</td>
            </tr>
*/
