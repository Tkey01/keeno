// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  toggleFavourite,
} from '../redux/user/actions';
import { ToggleFavouriteButton } from '../components/ToggleFavouriteButton';

const mapStateToProps = (state, ownProps) => ({
  favourite: state.user.favourites[ownProps.id],
  id: ownProps.id,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleFavourite,
}, dispatch);


export const ConnectedToggleFavourite = connect(mapStateToProps, mapDispatchToProps)(ToggleFavouriteButton);
