import * as TYPES from './constants';

export const toggleFavourite = id => ({
  type: TYPES.TOGGLE_FAVOURITE,
  payload: { id },
});
