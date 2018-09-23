// @flow
import { StyleSheet } from 'react-native';

import { scale, scaleByVertical, height } from '../../services/scale';
import { constants, colors } from '../../global';

export const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: colors.white,
  },
  searchContainer: {
    height: scaleByVertical(48),
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  searchInput: {
    flex: 1,
    fontFamily: constants.font,
    fontSize: scaleByVertical(14),
    color: colors.gray500,
  },
  searchControl: {
    width: scale(42),
    height: scaleByVertical(48),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchControlIcon: {
    width: scale(16),
    height: scaleByVertical(16),
  },
  searchResultList: {
    backgroundColor: colors.white,
    maxHeight: height - scaleByVertical(65),
  },
  searchResultText: {
    fontSize: scaleByVertical(16),
    lineHeight: scaleByVertical(40),
    paddingHorizontal: scale(15),
  },
});
