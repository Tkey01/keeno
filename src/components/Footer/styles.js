// @flow
import { StyleSheet, Platform } from 'react-native';
import { scale, scaleByVertical } from '../../services/scale';
import { colors } from '../../global';

export const styles = StyleSheet.create({
  footerContainer: {
    height: scaleByVertical(71),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: scaleByVertical(10),
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  footerLogo: {
    width: scale(68),
    height: scaleByVertical(20),
  },
  footerText: {
    color: colors.gray100,
    fontSize: scaleByVertical(14),
  },
});
