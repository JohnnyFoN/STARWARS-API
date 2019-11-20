import React, { Component } from "react";
import { async } from "q";
var getResult = false;
var postsFetched = false;
class PostDetails extends Component {
  constructor(props) {
    //debugger;
    super(props);
    this.state = {
      id: "",
      userId: "",
      title: "",
      body: "res.body",
      isLoading: true,
      userName: "",
      email: "",
      listOfComments: [],
      commenter: "",
      commentText: ""
    };
  }

  async componentDidMount() {
    try {
      await this.fetchThePost(this.props.match.params.id);
      if (this.state.userId) {
        await this.fetchTheUser(this.state.userId);
        await this.fetchTheComments(this.props.match.params.id);
      }
    } catch {
      console.log("error");
    } finally {
      this.setState({ isLoading: false });
    }
  }

  async fetchThePost(postId) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
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
      });
  }

  async fetchTheUser(userId) {
    await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then((getResult = true))
      .catch(function() {
        console.log("Request failed");
        getResult = false;
      })
      .then(res => {
        this.setState({
          userName: res.name,
          email: res.email
        });
      });
  }

  async fetchTheComments(postId) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then((getResult = true))
      .catch(function() {
        console.log("Request failed");
        getResult = false;
      })
      .then(res => {
        this.setState({
          listOfComments: res
        });
      });
  }

  populateCommentsTable() {
    debugger;
    return this.state.listOfComments.map((comment, index) => {
      const { email, body, id } = comment;
      //debugger;
      return (
        <tr key={id}>
          <td>{email}</td>
          <td>{body}</td>
        </tr>
      );
    });
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <div className="imperialLoader">
          <img src="https://cdn.dribbble.com/users/361263/screenshots/3051905/imperial_emblem.gif" />
          )
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
          <h2 className="commentsPostLabel">Comments</h2>
          <div className="comments">
            <table>
              <thead>
                <tr>
                  <th>Posted by</th>
                  <th>Post content</th>
                </tr>
              </thead>
              <tbody>{this.populateCommentsTable()}</tbody>
            </table>
          </div>
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
/*
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
  }
*/
