import { combineReducers } from 'redux';

import repos from './repoReducer';
import activeUser from './UserReducer';

const rootReducer = combineReducers({
  activeUser,
  repos
});

export default rootReducer;
