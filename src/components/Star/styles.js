// @flow
import { StyleSheet } from 'react-native';

import { scale } from '../../services/scale';

export const styles = StyleSheet.create({
  starBig: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(5),
  },
  starSmall: {
    width: scale(10),
    height: scale(10),
    marginRight: scale(3),
  },
});
