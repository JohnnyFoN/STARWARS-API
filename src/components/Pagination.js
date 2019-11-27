import React, { Component } from "react";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      totalPages: props.numberOfPages
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      page: nextProps.page
    });
  }

  changePage(direction) {
    if (direction === "right") {
      this.props.repopulateTable(10);
    }
    if (direction === "left") {
      this.props.repopulateTable(-10);
    }
  }

  handleChange(event) {
    var targetPage;
    if (parseInt(event.target.value) < 1) {
      targetPage = 1;
    } else if (parseInt(event.target.value) >= this.props.numberOfPages) {
      targetPage = this.props.numberOfPages;
    } else {
      targetPage = event.target.value;
    }
    this.setState({
      page: targetPage
    });
  }

  handleSubmit(event) {
    if (event.key === "Enter") {
      this.props.repopulateTableForPage(this.state.page);
    }
  }

  render() {
    var p = this.state.page;
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
