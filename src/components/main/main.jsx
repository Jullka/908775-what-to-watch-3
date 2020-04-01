import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {MoviesList} from '../movies-list/movies-list.jsx';
import {GenresList} from '../genres-list/genres-list.jsx';
import {ShowMore} from '../show-more/show-more.jsx';
import {UserBlock} from '../user-block/user-block.jsx';
import {getMovieDetails, getMoviesByGenre} from '../../reducer/data/selectors.js';
import {AppRoute} from '../const.js';
import {getShownMoviesNumber} from '../../reducer/app/selectors.js';

const Main = ({movieDetails, movies, onPlayMovie, onMovieCardClick}) => {
  const {id, title, genre, releaseDate, bigPoster, poster} = movieDetails;

  return (
    <div className="main">
      <section className="movie-card">
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
          <div className="movie-card__info">
            <div
              className="movie-card__poster">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2
                className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={() => onPlayMovie(id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />
          <MoviesList movies={movies} onMovieCardClick={onMovieCardClick} />
          <ShowMore />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </div>
  );
};

Main.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })).isRequired,
  onPlayMovie: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired
};

export {Main};

const mapStateToProps = (state) => ({
  movieDetails: getMovieDetails(state),
  movies: getMoviesByGenre(state).slice(0, getShownMoviesNumber(state))
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
