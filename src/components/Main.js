import React, { Component } from "react";
import { connect } from "react-redux";
import PostsApi from "../services/api/PostsApi";
import Action from "../redux/posts/actions";
import Posts from "./Posts";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfUsers: [],
      listOfPosts: [],
      id: "",
      userId: "",
      title: "Missing title",
      body: "Missing body",
      error: "",
      toggled: false,
      theme: "galleryPageBlack"
    };
    this.updatePost = this.updatePost.bind(this);
  }

  componentDidMount() {
    const { getPosts } = this.props;
    PostsApi.getAll()
      .then(posts => {
        getPosts(posts);
      })
      .catch(err => {
        this.setState({
          error: String(err)
        });
      });
  }

  addPostToList = post => {
    const { addPost } = this.props;
    addPost(post);
  };

  updatePost = post => {
    debugger;
    const { editPost } = this.props;
    editPost(post);
  };

  toggleTheme = () => {
    var themeColor;
    this.setState({
      toggled: !this.state.toggled
    });
    this.state.toggled === false
      ? (themeColor = "galleryPageRed")
      : (themeColor = "galleryPageBlack");
    this.setState({
      theme: themeColor
    });
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        <Posts
          listOfPosts={posts}
          addPostToList={post => this.addPostToList(post)}
          updatePost={post => this.updatePost(post)}
          listOfUsers={this.state.listOfUsers}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    // Properties
    posts: state.postsReducer.posts
  }),
  {
    // Functions
    getPosts: Action.getPosts,
    editPost: Action.editPost,
    addPost: Action.addPost,
    deletePost: Action.deletePost,
    viewPost: Action.viewPost,
    filterPosts: Action.filterPosts
  }
)(Main);
