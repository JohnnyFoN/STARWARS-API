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
      error: ""
    };
    this.updatePost = this.updatePost.bind(this);
  }

  componentDidMount() {
    const { getPosts } = this.props;
    debugger;
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

  updatePost(post) {
    var postIndex = this.state.listOfPosts.findIndex(x => x.id === post.id);

    var filtered = this.state.listOfPosts.filter(x => x.id !== post.id);
    filtered.splice(postIndex, 0, post);

    this.setState({
      listOfPosts: filtered
    });
  }

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
