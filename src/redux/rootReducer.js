import { combineReducers } from 'redux';

import todo from './todo/reducer';

const reducers = {
  todo,
};

const reducer = combineReducers(reducers);

export default reducer;
