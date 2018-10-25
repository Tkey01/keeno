// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getSearchResults } from '../redux/movies/selectors';
import {
  searchMovies,
  clearSearch,
  changeSearchText,
  toggleModal,
  searchById,
} from '../redux/movies/actions';
import { Search } from '../components/Search';

const mapStateToProps = state => ({
  modal: state.movies.modal,
  result: getSearchResults(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  searchMovies,
  clearSearch,
  changeSearchText,
  toggleModal,
  searchById,
}, dispatch);


export const ConnectedSearch = connect(mapStateToProps, mapDispatchToProps)(Search);
