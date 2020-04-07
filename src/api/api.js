import axios from 'axios';
import {ErrorCode} from '../components/const.js';

const BASE_URL = `https://htmlacademy-react-3.appspot.com/wtw`;
const DEFAULT_TIMEOUT = 5000;

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === ErrorCode.UNAUTHORIZED) {
      onUnauthorized();
      if (window.location.pathname !== `/login`) {
        window.location = `/login`;
      }
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
