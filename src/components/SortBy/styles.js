// @flow
import { StyleSheet } from 'react-native';

import { scale, scaleByVertical } from '../../services/scale';
import { colors } from '../../global';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  title: {
    fontSize: scaleByVertical(18),
    paddingHorizontal: scale(15),
    color: colors.white,
    height: scaleByVertical(44),
    lineHeight: scaleByVertical(44),
    backgroundColor: colors.purple,
  },
  button: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
    height: scaleByVertical(35),
    justifyContent: 'center',
    paddingHorizontal: scale(15),
  },
  text: {
    fontSize: scaleByVertical(16),
    color: colors.gray500,
  },
  textSelected: {
    color: colors.white,
  },
  buttonSelected: {
    backgroundColor: colors.gray500,
  },
});
