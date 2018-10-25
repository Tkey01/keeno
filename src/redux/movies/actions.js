import * as TYPES from './constants';

export const setMovies = list => ({
  type: TYPES.SET_MOVIES,
  payload: { list },
});

export const addMovies = (list, pages) => ({
  type: TYPES.ADD_MOVIES,
  payload: { list, pages },
});

export const fetchNowPlaying = (page, genre, filter) => ({
  type: TYPES.FETCH_NOW_PLAYING,
  payload: { page, genre, filter },
});

export const fetchTop100 = (page, genre, filter) => ({
  type: TYPES.FETCH_TOP_100,
  payload: { page, genre, filter },
});

export const searchMovies = req => ({
  type: TYPES.SEARCH_MOVIES,
  payload: req,
});

export const setSearchResults = searchResults => ({
  type: TYPES.SET_SEARCH_RESULTS,
  payload: { searchResults },
});

export const searchById = id => ({
  type: TYPES.SEARCH_BY_ID,
  payload: { id },
});

export const setMovieById = movie => ({
  type: TYPES.SET_MOVIE_BY_ID,
  payload: { movie },
});

export const setMovieVideo = video => ({
  type: TYPES.SET_MOVIE_VIDEO,
  payload: { video },
});

export const setSimilarMovies = similar => ({
  type: TYPES.SET_SIMILAR_MOVIES,
  payload: { similar },
});

export const setError = error => ({
  type: TYPES.SET_ERROR,
  payload: { error },
});

export const clearError = () => ({
  type: TYPES.CLEAR_ERROR,
});

export const clearSearch = () => ({
  type: TYPES.CLEAR_SEARCH,
});

export const toggleModal = type => ({
  type: TYPES.TOGGLE_MODAL,
  payload: { type },
});

export const changeSearchText = text => ({
  type: TYPES.CHANGE_SEARCH_TEXT,
  payload: { text },
});

export const setCredits = credits => ({
  type: TYPES.SET_CREDITS,
  payload: { credits },
});

export const clearList = () => ({
  type: TYPES.CLEAR_LIST,
});

export const setSortGenre = genre => ({
  type: TYPES.SET_SORT_GENRE,
  payload: { genre },
});

export const setSortFilter = filter => ({
  type: TYPES.SET_SORT_FILTER,
  payload: { filter },
});
