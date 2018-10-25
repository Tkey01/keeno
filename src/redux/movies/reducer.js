import { createReducer } from '../../services/createReducer';
import * as TYPES from './constants';

const initState = {
  error: '',
  sorted: [],
  movie: {},
  cast: [],
  director: '',
  video: '',
  similar: [],
  searchResults: [],
  filmsList: [],
  byId: {},
  pages: 0,
  modal: {
    isOpen: false,
    search: {
      isOpen: false,
      text: '',
    },
    login: {
      isOpen: false,
    },
    youtube: {
      isOpen: false,
    },
  },
  sortGenre: NaN,
  sortFilter: '',
};

/**
 * pages - это сколько фильмов содержится на сервере
 * 1 page запрос == 20 фильмам (2 - 40, 3 - 60 и т.д)
 * по умолчанию сделаем 1
 * далее мы будет использовать это значение в компоненте для того
 * чтобы понять что больше фильмов на сервере нет и нам необходимо
 * прекратить отправлять запросы и соответственно отображать фильмы
 * в компоненте
 */

const setMovies = (state, { list }) => ({
  ...state,
  sorted: list.map(item => item.id),
  byId: list.reduce((acc, item) => ({ ...acc, [item.id]: { ...item } }), {}),
  filmsList: list,
});

const addMovies = (state, { list, pages }) => ({
  ...state,
  filmsList: state.filmsList.concat(list),
  pages,
});

const setSearchResults = (state, { searchResults }) => ({
  ...state,
  searchResults,
});

const setError = (state, { error }) => ({
  ...state,
  error,
});

const clearError = state => ({
  ...state,
  error: '',
});

const clearSearch = state => ({
  ...state,
  searchResults: [],
});

const setMovieById = (state, { movie }) => ({
  ...state,
  movie,
});

const setMovieVideo = (state, { video }) => ({
  ...state,
  video,
});

const setSimilarMovies = (state, { similar }) => ({
  ...state,
  similar,
});

const toggleModal = ({ modal, ...restState }, { type }) => ({
  ...restState,
  modal: { ...modal, isOpen: !modal.isOpen, [type]: { isOpen: !modal[type].isOpen, text: '' } },
});

const changeSearchText = ({ modal, ...restState }, { text }) => ({
  ...restState,
  modal: { ...modal, search: { ...modal.search, text } },
});

const setCredits = ({ cast, ...restState }, { credits }) => ({
  ...restState,
  cast: credits.cast,
  director: credits.crew[0].name,
});

const clearList = ({ filmsList, ...restState }) => ({
  ...restState,
  filmsList: [],
});

const setSortGenre = ({ sortGenre, ...restState }, { genre }) => ({
  ...restState,
  sortGenre: genre,
});

const setSortFilter = ({ sortFilter, ...restState }, { filter }) => ({
  ...restState,
  sortFilter: filter,
});

const handlers = {
  [TYPES.SET_MOVIES]: setMovies,
  [TYPES.ADD_MOVIES]: addMovies,
  [TYPES.SET_SEARCH_RESULTS]: setSearchResults,
  [TYPES.CLEAR_SEARCH]: clearSearch,
  [TYPES.SET_MOVIE_BY_ID]: setMovieById,
  [TYPES.SET_MOVIE_VIDEO]: setMovieVideo,
  [TYPES.SET_SIMILAR_MOVIES]: setSimilarMovies,
  [TYPES.CLEAR_ERROR]: clearError,
  [TYPES.SET_ERROR]: setError,
  [TYPES.TOGGLE_MODAL]: toggleModal,
  [TYPES.CHANGE_SEARCH_TEXT]: changeSearchText,
  [TYPES.SET_CREDITS]: setCredits,
  [TYPES.CLEAR_LIST]: clearList,
  [TYPES.SET_SORT_GENRE]: setSortGenre,
  [TYPES.SET_SORT_FILTER]: setSortFilter,
};

export const reducer = createReducer(initState, handlers);
