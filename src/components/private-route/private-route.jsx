import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../const.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';


const PrivateRoute = (props) => {
  const {render, path, exact, isAuthenticated} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          isAuthenticated
            ? render()
            : <Redirect to={AppRoute.SIGN_IN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

const mapDispatchToProps = () => ({
});

export {PrivateRoute};
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
