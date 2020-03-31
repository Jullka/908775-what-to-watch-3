export default class Comment {
  constructor(data) {
    this.id = `` + data[`id`];
    this.text = data[`comment`];
    this.authorId = data[`user`][`id`];
    this.author = data[`user`][`name`];
    this.date = new Date(data[`date`]);
    this.rating = data[`rating`];
  }

  static parseComment(data) {
    return new Comment(data);
  }

  static parseComments(data) {
    return data.map(Comment.parseComment);
  }
}

