// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setSortFilter,
  clearList,
  fetchNowPlaying,
  fetchTop100,
} from '../../redux/movies/actions';
import { SortBy } from '../../components/SortBy';

export const SortByPage = connect(
  (state, ownProps) => ({
    sortFilter: state.movies.sortFilter,
    sortGenre: state.movies.sortGenre,
    genresById: state.genres.byId,
    genresList: state.genres.sorted,
    navigation: ownProps.navigation,
  }),
  dispatch => bindActionCreators({
    setSortFilter,
    clearList,
    fetchNowPlaying,
    fetchTop100,
  }, dispatch),
)(SortBy);
