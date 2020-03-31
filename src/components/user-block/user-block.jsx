import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../components/const.js';
import {getUser, getAuthorizationStatus} from '../../reducer/user/selectors.js';
import {history} from '../../routes/history.js';

const UserBlock = (props) => {
  const {isAuthenticated, avatar, onSignInClick} = props;

  return (
    <div className="user-block">
      {
        isAuthenticated &&
        <div className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63" />
        </div>
      }
      {isAuthenticated ||
        <a href="#" className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            onSignInClick();
          }}
        >Sign in</a>
      }
    </div>
  );
};

UserBlock.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
  onSignInClick: PropTypes.func
};

export {UserBlock};

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  avatar: getAuthorizationStatus(state) === AuthorizationStatus.AUTH ? getUser(state).avatar : null
});

const mapDispatchToProps = () => ({
  onSignInClick() {
    history.push(AppRoute.SIGN_IN);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
