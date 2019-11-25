import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: props.page,
      totalPages: props.numberOfPages
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     page: nextProps.page,
  //     totalPages: nextProps.numberOfPages
  //   });
  // }

  changePage(direction) {
    // if (pageNumber <= 0) {
    //   pageNumber = 1;
    // }
    // if (pageNumber > this.props.numberOfPages) {
    //   pageNumber = this.state.totalPages;
    // }
    // if (this.props.page !== this.state.page) {
    //   this.props.paginatePage(pageNumber);
    // }
    // if (pageNumber != this.state.page) {
    //   this.props.paginatePage(pageNumber);
    // }

    if (direction === "right") {
      this.props.repopulateTable(10);
    }
    if (direction === "left") {
      this.props.repopulateTable(-10);
    }
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
    var p = this.props.page;
    return (
      <div className="pagination">
        <a className="arrow" onClick={() => this.changePage("left")}>
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
        <a className="arrow" onClick={() => this.changePage("right")}>
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
