import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      totalPages: props.lastPage
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      page: nextProps.page,
      totalPages: nextProps.lastPage
    });
  }

  changePage(pageNumber) {
    if (pageNumber <= 0) {
      pageNumber = 1;
    }
    if (pageNumber > this.props.lastPage) {
      pageNumber = this.props.lastPage;
    }
    if (this.props.page === this.state.page) {
      console.log("Same");
      //this.props.createRequest(pageNumber);
    } else {
      console.log("Not same");
    }
    this.props.paginatePage(pageNumber);
  }

  handleChange(event) {
    this.setState({
      page: event.target.value
    });
  }

  handleSubmit(event) {
    if (event.key === "Enter") {
      this.changePage(this.state.page);
    }
  }

  render() {
    var p = this.state.page;
    return (
      <div className="pagination">
        <a href="#" className="arrow" onClick={() => this.changePage(p - 1)}>
          ❮
        </a>
        <a>
          <input
            type="text"
            value={p}
            onChange={e => this.handleChange(e)}
            onKeyDown={e => this.handleSubmit(e)}
          />
        </a>
        <a href="#" className="arrow" onClick={() => this.changePage(p + 1)}>
          ❯
        </a>
      </div>
    );
  }
}

export default Pagination;
/*
var p = this.state.page;
    return (
      <div className="pagination">
        <a href="#" className="arrow" onClick={() => this.changePage(p - 1)}>
          ❮
        </a>
        <a>
          <input value={this.state.page}></input>
        </a>
        <a href="#" className="arrow" onClick={() => this.changePage(p + 1)}>
          ❯
        </a>
      </div>
    );
*/
