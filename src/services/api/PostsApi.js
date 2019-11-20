const HOST = "https://jsonplaceholder.typicode.com";

export default class PostsApi {
  static getAll() {
    return fetch(`${HOST}/posts`).then(response => response.json());
  }
}
