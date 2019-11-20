const HOST = "https://jsonplaceholder.typicode.com";

export default class UsersApi {
  static getAll() {
    return fetch(`${HOST}/users`).then(response => response.json());
  }
}
