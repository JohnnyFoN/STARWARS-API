import React, { Component } from "react";
import PostForm from "./PostForm";
import { connect } from "react-redux";
import PostsApi from "../services/api/PostsApi";
import Action from "../redux/posts/actions";

import {
  Redirect,
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  NavLink,
  useHistory
} from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      show: false,
      id: "",
      userId: "",
      postTitle: "",
      postBody: "",
      searchvalue: "",
      dropBoxValue: null
    };
    this.handleDBChange = this.handleDBChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.listOfPosts
    });
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .catch(function() {
        console.log("Request failed");
      })
      .then(res => {
        this.setState({
          users: res
        });
      });
  }

  removePost = post => {
    const { deletePost } = this.props;
    alert("Are you sure you want to delete the post: " + post.title);
    deletePost(post);
  };

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

  populateDropDown() {
    let selectedID = this.state.userId;
    return this.state.users.map((user, i) => (
      <option
        className="userDropDown"
        key={i}
        value={user.id}
        userId={user.id}
        selected={user.id === selectedID}
      >
        {user.name}
      </option>
    ));
  }

  handleDBChange(event, typeOfFilter) {
    const { posts } = this.props;
    //let usersPost = posts;
    var filtered;

    if (typeOfFilter === "s") {
      this.searchValue = event.target.value;
    }

    if (typeOfFilter === "db") {
      this.dropBoxValue = event.target.value;
    }

    if (this.searchValue) {
      filtered = posts.filter(x => !!x.title.match(this.searchValue));
    } else {
      filtered = posts;
    }

    if (this.dropBoxValue) {
      filtered = filtered.filter(x => x.userId == this.dropBoxValue);
    }

    this.setState({
      posts: filtered
    });
  }

  populateTable() {
    let posts = this.state.posts || []; //
    return posts.map((post, index) => {
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
        <div className="postFunctions">
          <h2>Search by title:</h2>
          <input
            className="searchBox"
            type="text"
            onChange={e => {
              this.handleDBChange(e, "s");
            }}
            placeholder="Search..."
          />

          <h2>Filter by user:</h2>
          <select
            className="userDropDown"
            onChange={e => this.handleDBChange(e, "db")}
          >
            {this.populateDropDown()}
          </select>
        </div>
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

export default connect(
  state => ({
    posts: state.postsReducer.posts
  }),
  {
    getPosts: Action.getPosts,
    editPost: Action.editPost,
    addPost: Action.addPost,
    deletePost: Action.deletePost,
    viewPost: Action.viewPost,
    filterPosts: Action.filterPosts
  }
)(Posts);
