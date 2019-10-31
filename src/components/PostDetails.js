import React, { Component } from "react";
var getResult = false;
var postsFetched = false;
class PostDetails extends Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      id: "",
      userId: "",
      title: "",
      body: "res.body",
      isLoading: true,
      userName: "",
      email: ""
    };
  }

  componentDidMount() {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then((getResult = true))
      .catch(function() {
        console.log("Request failed");
        getResult = false;
      })
      .then(res => {
        this.setState({
          id: res.id,
          title: res.title,
          body: res.body,
          userId: res.userId
        });
        getResult = true;
        this.fetchTheUser(this.state.userId);
      });
    console.log(this.state.userId);
    console.log(this.state.userName);
  }

  fetchTheUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then((getResult = true))
      .catch(function() {
        console.log("Request failed");
        getResult = false;
      })
      .then(res => {
        this.setState({
          userName: res.name,
          email: res.email,
          isLoading: false
        });
      });
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    } else {
      return (
        <div className="postDetails">
          <h2 className="postLabel">Post #{this.state.id}:</h2>
          <p>
            <h3>{this.state.title}</h3>
          </p>
          <h2 className="postLabel">Text:</h2>
          <p>
            <h3>{this.state.body}</h3>
          </p>
          <p>
            <h2 className="postLabel">Written by:</h2>
            <h3>{this.state.userName}</h3>
            <h3>({this.state.email})</h3>
          </p>
        </div>
      );
    }
  }
}

export default PostDetails;
/*
<div className="btns">
            <button className="btnEdit">Edit post</button>
            <button className="btnDelete">Delete</button>
          </div>

*/
