// @flow
import { StyleSheet } from 'react-native';

import { colors } from '../../global';
import { scale, scaleByVertical } from '../../services/scale';

export const styles = StyleSheet.create({
  tab: {
    height: scaleByVertical(33),
    paddingHorizontal: scale(10),
    color: colors.gray300,
    fontSize: scaleByVertical(14),
    lineHeight: scaleByVertical(33),
  },
});
