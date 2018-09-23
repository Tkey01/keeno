// @flow
import { StyleSheet } from 'react-native';

import { colors } from '../../global';
import { scale, scaleByVertical } from '../../services/scale';

export const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    paddingBottom: scaleByVertical(16),
    backgroundColor: colors.white,
  },
  containerTabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.gray600,
    borderBottomWidth: scaleByVertical(2),
  },
  tab: {
    height: scaleByVertical(33),
    paddingHorizontal: scale(10),
    color: colors.gray300,
    fontSize: scaleByVertical(14),
    lineHeight: scaleByVertical(33),
  },

  filterButton: {
    width: scale(33),
    height: scaleByVertical(33),
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonImg: {
    width: scale(16),
    height: scale(16),
  },
});
