import { USER_SIGNIN_SUCCESS } from '../constants';

import initialState from './initialState';


const userReducer = (state = initialState.activeUser, action) => {
  switch (action.type) {
    case USER_SIGNIN_SUCCESS:
      console.log('action', action);
      return action.activeUser;
    
    default:
      return state;
  }
};

export default userReducer;
