import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ActionCreator from '../../reducer/action-creator.js';
// import {} from '../../reducer/app/selectors.js';
import {getMoviesByGenre, getShownMoviesNumber} from '../../reducer/data/selectors.js';

const ShowMore = (props) => {
  const {onClick, isVisible} = props;
  return (
    <div className="catalog__more">
      {
        isVisible &&
        <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
      }
    </div>
  );
};

ShowMore.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isVisible: getMoviesByGenre(state).length > getShownMoviesNumber(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.showMoreMovies());
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);

