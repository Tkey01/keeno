// @flow
import { StyleSheet } from 'react-native';

import { scaleByVertical } from '../../services/scale';

export const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  searchOffset: {
    top: scaleByVertical(48),
  },
});
