export default class User {

  constructor(data) {
    this.id = `` + data[`id`];
    this.email = data[`email`];
    this.name = data[`name`];
    this.avatar = data[`avatar_url`];
  }

  static parseUser(data) {
    return new User(data);
  }
}
