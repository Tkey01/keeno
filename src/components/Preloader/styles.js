// @flow
import { StyleSheet } from 'react-native';

import { scale, scaleByVertical } from '../../services/scale';
import { colors } from '../../global';

export const styles = StyleSheet.create({
  preloaderContainer: {
    marginVertical: scaleByVertical(20),
    height: scaleByVertical(80),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rectContainer: {
    height: scaleByVertical(42),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rect: {
    width: scale(5),
    marginRight: scale(5),
    backgroundColor: colors.purple,
    borderRadius: scaleByVertical(15),
  },
  preloaderText: {
    fontSize: scaleByVertical(18),
    fontWeight: 'bold',
    color: colors.gray100,
  },
});
