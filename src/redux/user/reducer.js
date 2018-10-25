import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  favourites: {},
};

const toggleFavourite = ({ favourites, ...restState }, { id }) => ({
  ...restState,
  favourites: { ...favourites, [id]: !favourites[id] },
});

const handlers = {
  [TYPES.TOGGLE_FAVOURITE]: toggleFavourite,
};

export const reducer = createReducer(initState, handlers);
