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

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.listOfPosts,
      users: [],
      show: false,
      id: "",
      userId: "",
      postTitle: "",
      postBody: ""
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
    let usersPost = this.props.listOfPosts;
    let val = event.nativeEvent.target.value;
    var filtered = [];
    // if (typeOfFilter === "s") {
    //   words = event.target.value;
    // } else {
    //   words = "";
    // }
    //filtered = usersPost.filter(x => x.title.match(words)); //&& x.userId === parseInt(val)
    if (typeOfFilter === "s") {
      filtered = usersPost.filter(x => x.title.match(event.target.value));
    }
    if (typeOfFilter === "db") {
      filtered = usersPost.filter(x => x.userId === parseInt(val));
    }
    filtered = usersPost.filter(
      x => x.title.match(event.target.value) || x.userId === parseInt(val)
    );
    this.setState({
      posts: filtered
    });
  }

  onEnterPress(e) {
    let userPost = this.props.listOfPosts;
    if (e.key === "Enter") {
      var listWithTitle = userPost.filter(x => x.title.match(e.target.value));
      this.setState({
        posts: listWithTitle
      });
    }
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
            onKeyDown={e => {
              this.handleDBChange(e, "s");
            }}
            placeholder="Search.."
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

export default Posts;

/*

            <button
              className="btnView"
              onClick={e => this.redirectToPost(post)}
            >
              View
            </button>


            <button className="btnSearchPostTitle">Search</button>
*/
