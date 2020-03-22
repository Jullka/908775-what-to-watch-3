import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/reducer.js';

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

const mapStateToProps = ({filteredMovies, shownMoviesNumber}) => ({
  isVisible: filteredMovies.length > shownMoviesNumber
});

const mapDispatchToProps = (dispatch) => ({
  onClick() {
    dispatch(ActionCreator.showMoreMovies());
  }
});

export {ShowMore};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);

