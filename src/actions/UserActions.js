import http from '../helper/http.service';

import { config } from '../config';
import { USER_SIGNIN_SUCCESS } from '../constants';

export const userSigninSuccess = (userData) => {
	return {type: USER_SIGNIN_SUCCESS, userData};
}

export const loginUser = (email, password) => {
  return ((dispatch) => {
    return http.post(`${config.API_BASE_URL}/user_dashboard/auth/sign_in`,
      {email, password})
      .then((userData) => {
        console.log('got user', userData);
        console.log({email, password});
        dispatch(userSigninSuccess(userData));
      });
  });
};
