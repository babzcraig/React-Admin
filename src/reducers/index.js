import { combineReducers } from 'redux';

import repos from './repoReducer';

const rootReducer = combineReducers({
	repos
});

export default rootReducer;
