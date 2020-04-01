import {AppRoute} from '../components/const.js';

const createRoute = (route, param) => {
  switch (route) {
    case AppRoute.FILM:
    case AppRoute.PLAYER:
      return route.replace(`:id`, param);
    default:
      return route;
  }
};

export {createRoute};
