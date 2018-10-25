// @flow
import { StyleSheet } from 'react-native';

import { scale } from '../../services/scale';
import { colors } from '../../global';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    backgroundColor: colors.white,
  },
});
