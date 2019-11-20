import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfUsers: [],
      posts: props.posts,
      show: props.show,
      selectedPost: props.selectedPost,
      id: "",
      userId: "",
      title: "",
      body: "",
      user: {},
      userFullName: ""
    };
    this.populateDropDown = this.populateDropDown.bind(this);
    this.getUserFullName = this.getUserFullName.bind(this);
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .catch(function() {
        console.log("Request failed");
      })
      .then(res => {
        this.setState({
          listOfUsers: res
        });
      });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPost) {
      this.setState({
        id: nextProps.selectedPost.id,
        userId: nextProps.selectedPost.userId,
        title: nextProps.selectedPost.title,
        body: nextProps.selectedPost.body
      });
    } else {
      this.setState({
        id: "",
        userId: "",
        title: "",
        body: ""
      });
    }
  }

  getUserFullName(id) {
    var user = this.state.listOfUsers.filter(x => x.id === id);
    console.log(user[0].name);
    return user[0].name;
  }

  handleChange(event, property) {
    this.setState({
      [property]: event.target.value
    });
  }

  populateDropDown() {
    let selectedID = this.state.userId;
    console.log(selectedID);
    return this.state.listOfUsers.map((user, i) => (
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

  clearModalFields() {
    this.setState({
      id: "",
      userId: "",
      title: "",
      body: ""
    });
  }

  savePost(id) {
    var mehtodType = "";
    if (id !== "") {
      mehtodType = "PATCH";
    } else {
      mehtodType = "POST";
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: mehtodType,
      body: JSON.stringify({
        id: this.state.id,
        title: this.state.title,
        body: this.state.body,
        userId: this.state.userId
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json =>
        mehtodType === "POST"
          ? this.props.addPostToList(json)
          : this.props.updatePost(json)
      );
    this.clearModalFields();
    this.props.hideModal();
    console.log(this.state.userId);
  }

  handleDBChange(event) {
    var index = event.nativeEvent.target.selectedIndex;
    var x = event.nativeEvent.target[index].text;
    var changedUser = this.state.listOfUsers.filter(u => u.name === x);
    var changedUserId = changedUser[0].id;
    this.setState({
      userId: changedUserId
    });
    console.log(changedUserId);
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="modal">
        <h4>Select a user:</h4>
        <select className="userDropDown" onChange={e => this.handleDBChange(e)}>
          {this.populateDropDown()}
        </select>

        <h4>Insert post's title:</h4>
        <input
          type="text"
          className="postTitle"
          value={this.state.title}
          onChange={e => this.handleChange(e, "title")}
        ></input>

        <h4>Insert post's text:</h4>
        <textarea
          type="text"
          className="postBody"
          value={this.state.body}
          onChange={e => this.handleChange(e, "body")}
        ></textarea>

        <div>
          <button
            className="btnSave"
            onClick={() => this.savePost(this.state.id)}
          >
            Save
          </button>
          <button className="btnCancel" onClick={() => this.props.hideModal()}>
            Cancel
          </button>
          <button className="btnClear" onClick={() => this.clearModalFields()}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default PostForm;

// getUserFullName(userId) {
//   var selectedUserId = "?id=" + userId;
//   fetch(`https://jsonplaceholder.typicode.com/users/` + selectedUserId)
//     .then(response => response.json())
//     .catch(function() {
//       console.log("Request failed");
//     })
//     .then(res => {
//       this.setState({
//         user: res
//       });
//     });
// }

/*
 <input
          type="text"
          value={this.state.userId}
          onChange={e => this.handleChange(e, "userId")}
        ></input>
*/

/*
let userList = Object.values(this.state.listOfUsers).map((user, i) => {
      return (
        <select className="userDropDown" key={i} value={user.value}>
          <option>{user.name}</option>
        </select>
      );
    });
*/
