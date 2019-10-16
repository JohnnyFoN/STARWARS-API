import React, { Component } from "react";
import Users from "./Users";
import Pagination from "./Pagination";

var x = 1;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfUsers: [],
      currentPage: 0,
      lastPage: 0
    };

    this.paginatePage = this.paginatePage.bind(this);
    this.createRequest = this.createRequest.bind(this);
  }

  createRequest(pageNumber) {
    x = pageNumber;
    fetch(`https://reqres.in/api/users?page=${x}`)
      .then(response => response.json())
      .then(res => {
        this.setState({
          listOfUsers: res.data,
          currentPage: pageNumber,
          lastPage: res.total_pages
        });
      });
  }

  paginatePage(pageNumber) {
    console.log(
      "Page number is: " +
        pageNumber +
        " Current page is: " +
        this.state.currentPage
    );
    // if (pageNumber !== this.currentPage) {}
    this.createRequest(pageNumber);
  }

  componentDidMount() {
    this.createRequest(x);
  }

  render() {
    return (
      <div>
        <Users listOfUsers={this.state.listOfUsers} />
        <Pagination
          page={this.state.currentPage}
          lastPage={this.state.lastPage}
          paginatePage={this.paginatePage}
        />
      </div>
    );
  }
}

export default Main;
