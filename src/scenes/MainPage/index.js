// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  toggleFavourite,
  toggleModal,
  searchById,
  fetchNowPlaying,
  clearList,
  fetchTop100,
  setSortGenre,
} from '../../redux/movies/actions';
import { Main } from '../../components/Main';
import { remapMovieFields } from '../../services/helpers';
import { CONFIG } from '../../services/api';

export const MainPage = connect(
  (state, ownProps) => ({
    ...remapMovieFields(state.movies.movie),
    bg: `${CONFIG.IMAGE_BASE}/w780${state.movies.movie.poster_path}`,
    favourites: state.movies.favourites,
    navigation: ownProps.navigation,
    modal: state.movies.modal,
    filmsList: state.movies.filmsList,
    activeGenre: state.movies.sortGenre,
    activeSort: state.movies.sortFilter,
    pages: state.movies.pages,
  }),
  dispatch => bindActionCreators({
    toggleFavourite,
    toggleModal,
    searchById,
    fetchNowPlaying,
    clearList,
    fetchTop100,
    setSortGenre,
  }, dispatch),
)(Main);
