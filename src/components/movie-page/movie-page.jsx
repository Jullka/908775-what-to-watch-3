import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Tab from '../tab/tab.jsx';
import Tabs from '../tabs/tabs.jsx';
import {MoviesList} from '../movies-list/movies-list.jsx';
import {UserBlock} from '../user-block/user-block.jsx';
import {AppRoute} from '../const.js';

const MoviePage = (props) => {
  const {movie, onPlayMovie, moviesLikeThis, onMovieCardClick} = props;
  const {title, genre, releaseDate, poster, bigPoster, ratingScore, ratingLevel, ratingCount, text, director, starring, comments, runTime} = movie;

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={bigPoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to={AppRoute.MAIN} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock />

          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onPlayMovie}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>
            <Tabs>
              <Tab name="Overview">
                <div className="movie-rating">
                  <div className="movie-rating__score">{ratingScore}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{ratingLevel}</span>
                    <span className="movie-rating__count">{ratingCount} ratings</span>
                  </p>
                </div>
                <div className="movie-card__text">
                  <p>{text}</p>
                  <p className="movie-card__director"><strong>Director: {director}</strong></p>
                  <p className="movie-card__starring"><strong>Starring: {starring.slice(0, 3).join(`, `)} and other</strong></p>
                </div>
              </Tab>

              <Tab name="Details">
                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">{director}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value">
                        {starring.slice(0, 3).join(`, `)} and other
                      </span>
                    </p>
                  </div>
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">{runTime}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">{genre}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">{releaseDate}</span>
                    </p>
                  </div>
                </div>
              </Tab>

              <Tab name="Reviews">
                <div className="movie-card__reviews movie-card__row">
                  <div className="movie-card__reviews-col">
                    {comments.map((review) => (
                      <div className="review" key={review.id}>
                        <blockquote className="review__quote">
                          <p className="review__text">{review.text}</p>
                          <footer className="review__details">
                            <cite className="review__author">{review.author}</cite>
                            <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                          </footer>
                        </blockquote>
                        <div className="review__rating">{review.rating}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
            </Tabs>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={moviesLikeThis} onMovieCardClick={onMovieCardClick}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
    ratingCount: PropTypes.number.isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      rating: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
  onPlayMovie: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  moviesLikeThis: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })).isRequired
};

export {MoviePage};
