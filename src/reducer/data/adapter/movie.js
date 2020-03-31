export default class Movie {
  constructor(data) {
    this.id = `` + data[`id`];
    this.title = data[`name`];
    this.genre = data[`genre`];
    this.releaseDate = data[`released`];
    this.runTime = data[`run_time`];
    this.poster = data[`preview_image`];
    this.bigPoster = data[`poster_image`];
    this.backgroundImage = data[`background_image`];
    this.backgroundColor = data[`background_color`];
    this.video = data[`video_link`];
    this.previewSrc = data[`preview_video_link`];
    this.description = data[`description`];
    this.director = data[`director`];
    this.actors = data[`starring`] || [];
    this.rating = {score: data[`rating`], count: data[`scores_count`]};
    this.isFavorite = data[`is_favorite`];
    this.comments = [];
  }

  setComments(comments) {
    this.comments = comments;
    return this;
  }

  static parseMovie(data) {
    return new Movie(data);
  }

  static parseMovies(data) {
    return data.map(Movie.parseMovie);
  }

}
