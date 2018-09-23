// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleFavourite, toggleModal, searchById } from '../../redux/movies/actions';
import { Film } from '../../components/Film';
import { remapMovieFields } from '../../services/helpers';
import { CONFIG } from '../../services/api';

export const FilmPage = connect(
  (state, ownProps) => ({
    ...remapMovieFields(state.movies.movie),
    bg: `${CONFIG.IMAGE_BASE}/w780${state.movies.movie.backdrop_path}`,
    cast: state.movies.cast,
    director: state.movies.director,
    favourites: state.movies.favourites,
    navigation: ownProps.navigation,
    modal: state.movies.modal,
    similar: state.movies.similar,
  }),
  dispatch => bindActionCreators({
    toggleFavourite,
    toggleModal,
    searchById,
  }, dispatch),
)(Film);
