import { LOAD_REPOS_SUCCESS } from '../constants';

import initialState from './initialState';


const repoReducer = (state = initialState.repos, action) => {
  switch (action.type) {
    case LOAD_REPOS_SUCCESS:
      return [
        ...state,
        ...action.repos
      ]
    
    default:
      return state;
  }
};

export default repoReducer;
