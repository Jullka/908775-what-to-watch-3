import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import MoviesList from '../movies-list/movies-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import ShowMore from '../show-more/show-more.jsx';
import VideoPlayerFull from '../video-player-full/video-player-full.jsx';
import {AuthorizationStatus} from '../const.js';
import {getAuthorizationStatus, getUser} from "../../reducer/user/selectors.js";
import withActiveItem from '../hocs/with-active-item/with-active-item.jsx';

const MoviesListWrapped = withActiveItem(MoviesList);
const GenresListWrapperd = withActiveItem(GenresList);

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film, onMovieCardClick, activeItem, onItemEnter, onItemLeave, authorizationStatus, user, onMovieFavoriteStatusClick} = this.props;
    const {title, genre, releaseDate, background, poster} = film;

    return (
      <>
        <div className="main">
          <section className="movie-card">
            <div className="movie-card__bg">
              <img src={background} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>

              {
                (authorizationStatus === AuthorizationStatus.AUTH) ?
                  (<div className="user-block">
                    <Link to="/mylist">
                      <div className="user-block__avatar">
                        <img
                          src={user}
                          alt="User avatar"
                          width="63"
                          height="63"
                        />
                      </div>
                    </Link>
                  </div>) : (
                    <div className="user-block">
                      <Link to="/login">Sign In</Link>
                    </div>
                  )
              }
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
                    <button
                      className="btn btn--play movie-card__button"
                      onClick={() => {
                        onItemEnter(film);
                      }}
                      type="button">
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    {authorizationStatus === AuthorizationStatus.AUTH ?
                      <>
                        <button
                          className="btn btn--list movie-card__button"
                          type="button"
                          onClick={() => {
                            onMovieFavoriteStatusClick(film.id, +!film.favorite);
                          }}
                        >
                          {!film.favorite ?
                            <svg viewBox="0 0 19 20" width="19" height="20">
                              <use xlinkHref="#add"></use>
                            </svg> :
                            <svg viewBox="0 0 18 14" width="18" height="14">
                              <use xlinkHref="#in-list"></use>
                            </svg>
                          }
                          <span>My list</span>
                        </button>
                      </> :
                      <>
                        <Link
                          to="/login"
                          className="btn btn--list movie-card__button"
                          type="button">
                          <svg viewBox="0 0 19 20" width="19" height="20">
                            <use xlinkHref="#add"></use>
                          </svg>
                          <span>My list</span>
                        </Link>
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="page-content">
            <section className="catalog">
              <h2 className="catalog__title visually-hidden">Catalog</h2>

              <GenresListWrapperd />

              <MoviesListWrapped
                onMovieCardClick={onMovieCardClick}
              />

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
        {activeItem && (<VideoPlayerFull film={film} onItemLeave={onItemLeave} />)}
      </>
    );
  }
}
Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  onMovieFavoriteStatusClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
    image: PropTypes.string,
    poster: PropTypes.string,
    background: PropTypes.string,
    video: PropTypes.string,
    runtime: PropTypes.string,
    rating: PropTypes.number,
    score: PropTypes.number,
    director: PropTypes.string,
    description: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    favorite: PropTypes.bool,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          author: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
          }).isRequired,
          date: PropTypes.string.isRequired,
          rating: PropTypes.number,
        })
    ),
  }),
  onMovieCardClick: PropTypes.func.isRequired,
  onItemEnter: PropTypes.func.isRequired,
  onItemLeave: PropTypes.func.isRequired,
  activeItem: PropTypes.any,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  user: getUser(state)
});
export {Main};
export default connect(mapStateToProps)(Main);
