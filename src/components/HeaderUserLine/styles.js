// @flow
import { StyleSheet } from 'react-native';

import { scale, scaleByVertical } from '../../services/scale';

export const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaleByVertical(32),
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: scale(24),
    height: scaleByVertical(24),
    marginRight: scale(22),
  },
  logo: {
    width: scale(83),
    height: scaleByVertical(24),
  },
});
