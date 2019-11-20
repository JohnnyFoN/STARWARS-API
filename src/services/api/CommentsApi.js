const HOST = "https://jsonplaceholder.typicode.com";

export default class CommentssApi {
  static getAll() {
    return fetch(`${HOST}/comments`).then(response => response.json());
  }
}
