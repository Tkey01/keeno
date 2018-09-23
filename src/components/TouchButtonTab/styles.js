// @flow
import { StyleSheet } from 'react-native';
import { scaleByVertical } from '../../services/scale';
import { colors } from '../../global';

export const styles = StyleSheet.create({
  borderBottom: {
    position: 'absolute',
    bottom: scaleByVertical(-2),
    left: 0,
    right: 0,
    height: scaleByVertical(2),
    backgroundColor: colors.purple,
  },
});
