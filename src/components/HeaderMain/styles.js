// @flow
import { StyleSheet } from 'react-native';

import { scale, scaleByVertical } from '../../services/scale';
import { colors } from '../../global';

export const styles = StyleSheet.create({
  headerContainer: {
    height: scaleByVertical(400),
    color: colors.white,
    paddingHorizontal: scale(10),
    paddingVertical: scale(16),
    justifyContent: 'space-between',
    backgroundColor: '#333',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaleByVertical(32),
  },
  bottomContainer: {
  },
  textNow: {
    fontSize: scaleByVertical(12),
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textTitle: {
    fontSize: scaleByVertical(18),
    textTransform: 'uppercase',
    marginBottom: scaleByVertical(8),
  },
  textInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleByVertical(16),
  },
  textInfo: {
    fontSize: scaleByVertical(13),
    marginRight: scale(15),
  },
  textInfoDivide: {
    width: scale(1),
    height: scaleByVertical(16),
    backgroundColor: colors.white,
    marginRight: scale(15),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: scaleByVertical(166),
  },
  bottomShadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: scaleByVertical(269),
  },
});
