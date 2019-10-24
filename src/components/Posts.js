import React, { Component } from "react";
import PostForm from "./PostForm";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //users: props.listOfUsers,
      posts: props.listOfPosts,
      show: false,
      id: "",
      userId: "",
      postTitle: "",
      postBody: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      posts: nextProps.listOfPosts
    });
  }

  removePost(post) {
    console.log(post);
    //var postIndex = this.state.posts.findIndex(x => x.id === post.id);

    var filtered = this.state.posts.filter(x => {
      return x.id !== post.id;
    });
    console.log(filtered);
    this.setState({
      posts: filtered
    });
  }

  populateTable() {
    return this.state.posts.map((post, index) => {
      const { userId, title, body, id } = post;
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
