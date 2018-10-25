import { combineReducers } from 'redux';

import { reducer as movies } from './movies/reducer';
import { reducer as genres } from './genres/reducer';
import { reducer as user } from './user/reducer';

export const reducers = combineReducers({
  movies,
  genres,
  user,
});
