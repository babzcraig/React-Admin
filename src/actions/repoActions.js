import http from '../helper/http.service';

import { config } from '../config';
import { LOAD_REPOS_SUCCESS } from '../constants';

const BASE_URL = 'https://api.github.com';


export const loadReposSuccess = (repos) => {
	return {type: LOAD_REPOS_SUCCESS, repos};
}

export const loadRepos = () => {
  return ((dispatch) => {
    return axios.get(`${config.API_BASE_URL}/users`)
      .then((repos) => {
        dispatch(loadReposSuccess(repos.data));
      });
  });
};
