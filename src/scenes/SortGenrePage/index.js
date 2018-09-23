// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setSortGenre,
  clearList,
  fetchNowPlaying,
  fetchTop100,
} from '../../redux/movies/actions';
import { SortGenre } from '../../components/SortGenre';

export const SortGenrePage = connect(
  (state, ownProps) => ({
    sortGenre: state.movies.sortGenre,
    sortFilter: state.movies.sortFilter,
    genresById: state.genres.byId,
    genresList: state.genres.sorted,
    navigation: ownProps.navigation,
  }),
  dispatch => bindActionCreators({
    setSortGenre,
    clearList,
    fetchNowPlaying,
    fetchTop100,
  }, dispatch),
)(SortGenre);
