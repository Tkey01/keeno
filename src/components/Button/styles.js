// @flow
import { StyleSheet } from 'react-native';

import { constants } from '../../global/index';
import { scale, scaleByVertical } from '../../services/scale';

export const styles = StyleSheet.create({
  button: {
    height: scaleByVertical(32),
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonPrimary: {
    borderWidth: 0,
  },
  containerPrimary: {
    height: scaleByVertical(32),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(25),
  },
  buttonTransparent: {
    paddingHorizontal: scale(17),
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontFamily: constants.font,
    textTransform: 'uppercase',
    color: '#fff',
  },
  buttonPrimaryText: {
    fontWeight: 'bold',
    fontSize: scaleByVertical(16),
  },
  buttonTransparentText: {
    fontWeight: 'normal',
    fontSize: scaleByVertical(13),
  },
  image: {
    marginRight: scale(9),
  },
  imageHeart: {
    width: scale(16),
    height: scaleByVertical(14),
  },
  imageTriangle: {
    width: scale(16),
    height: scaleByVertical(16),
  },
});
