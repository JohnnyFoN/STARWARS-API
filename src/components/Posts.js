import React, { Component } from "react";
import PostForm from "./PostForm";
import {
  Redirect,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  NavLink,
  useHistory
} from "react-router-dom";
import PostDetails from "./PostDetails";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.listOfPosts,
      show: false,
      id: "",
      userId: "",
      postTitle: "",
      postBody: ""
    };
    //this.redirectToPost = this.redirectToPost.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.listOfPosts
    });
  }

  removePost(post) {
    alert("Are you sure you want to delete the post: " + post.title);
    var filtered = this.state.posts.filter(x => {
      return x.id !== post.id;
    });
    this.setState({
      posts: filtered
    });
  }

  populateTable() {
    return this.state.posts.map((post, index) => {
      const { userId, title, body, id } = post;
      //debugger;
      return (
        <tr key={id}>
          <td>{userId}</td>
          <td>{title}</td>
          <td>{body}</td>
          <td className="buttons">
            <button
              className="btnEdit"
              onClick={e => this.showModalWithValues(e, post)}
            >
              Edit post
            </button>
            <button className="btnDelete" onClick={e => this.removePost(post)}>
              Delete
            </button>

            <button className="btnView">
              <NavLink to={`/post/${post.id}`}>View post</NavLink>
            </button>
          </td>
        </tr>
      );
    });
  }

  showModalWithValues = (e, post) => {
    this.setState({
      show: true,
      selectedPost: post
    });
  };

  showModal = e => {
    this.setState({
      show: true,
      selectedPost: null
    });
  };

  hideModal = () => {
    this.setState({ show: false, selectedPost: null });
  };

  render() {
    return (
      <div>
        <PostForm
          userId={this.state.userId}
          selectedPost={this.state.selectedPost}
          show={this.state.show}
          hideModal={this.hideModal}
          populateTable={this.populateTable}
          updatePost={this.props.updatePost}
          addPostToList={this.props.addPostToList}
          listOfUsers={this.props.listOfUsers}
        />
        <h1 className="tableTitle">POSTS</h1>
        <button
          className="btnAddPost"
          onClick={e => {
            this.showModal();
          }}
        >
          Add new post
        </button>
        <div className="userData">
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Post title</th>
                <th>Post content</th>
              </tr>
            </thead>
            <tbody>{this.populateTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Posts;

/*

            <button
              className="btnView"
              onClick={e => this.redirectToPost(post)}
            >
              View
            </button>
*/
