import React, { Component } from "react";
import Posts from "./Posts";

import { getAllPosts } from "../actions/actionIndex";

var x = 1;
var getResult = false;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfUsers: [],
      listOfPosts: [],
      id: "",
      userId: "",
      title: "Missing title",
      body: "Missing body"
    };
    this.updatePost = this.updatePost.bind(this);
  }

  addPostToList(post) {
    this.setState({
      listOfPosts: [...this.state.listOfPosts, post]
    });
  }

  updatePost(post) {
    var postIndex = this.state.listOfPosts.findIndex(x => x.id === post.id);

    var filtered = this.state.listOfPosts.filter(x => x.id !== post.id);
    filtered.splice(postIndex, 0, post);

    this.setState({
      listOfPosts: filtered
    });
  }

  componentDidMount() {
    debugger;

    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then((getResult = true))
      .catch(function() {
        console.log("Request failed");
        getResult = false;
      })
      .then(res => {
        this.setState({
          listOfPosts: res
        });
      });
    this.props.store.dispatch({
      type: "GET_ALL_POSTS",
      listOfPosts: this.state.listOfPosts
    });
  }

  render() {
    return (
      <div>
        <Posts
          listOfPosts={this.state.listOfPosts}
          addPostToList={post => this.addPostToList(post)}
          updatePost={post => this.updatePost(post)}
          listOfUsers={this.state.listOfUsers}
        />
      </div>
    );
  }
}

export default Main;
/*

consturctor:
listOfUsers: [],
currentPage: 0,
lastPage: 0,

paginatePage(pageNumber) {
    this.createRequest(pageNumber);
  }

<Users listOfUsers={this.state.listOfUsers} />

<Pagination
page={this.state.currentPage}
lastPage={this.state.lastPage}
paginatePage={this.paginatePage}
/>
*/
/*
USERS:


      .then(
        fetch(`https://jsonplaceholder.typicode.com/posts`)
          .then(response => response.json())
          .catch(function() {
            console.log("Request faild");
          })
          .then(res => {
            this.setState({
              listOfUsers: res
            });
          })
      );


*/

// replacePost = i => {
//   // debugger;
//   this.setState(state => {
//     const postList = this.state.listOfPosts.map((post, j) => {
//       if (j === i) {
//         return post;
//       } else {
//         //
//       }
//     });
//     console.log(postList);
//     return {
//       postList
//     };
//   });
// };
