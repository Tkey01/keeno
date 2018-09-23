// @flow
import { StyleSheet, Platform } from 'react-native';
import { scale, scaleByVertical } from '../../services/scale';
import { colors } from '../../global';

export const styles = StyleSheet.create({
  similarItem: {
    width: scale(145),
    marginBottom: scaleByVertical(10),
    justifyContent: 'space-between',
    borderRadius: 2,
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      },
      android: {
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
    }),
  },
  similarTitleBlock: {
    paddingHorizontal: scale(8),
    paddingVertical: scaleByVertical(8),
  },
  similarTitleBlockText: {
    color: colors.gray500,
    fontWeight: 'bold',
    fontSize: scaleByVertical(14),
    marginBottom: scaleByVertical(6),
  },
  similarRateContainer: {
    flexDirection: 'row',
  },
  similarRateImg: {
    width: scale(8),
    height: scale(8),
    marginRight: scale(5),
  },
  similarPoster: {
    height: scaleByVertical(110),
  },
  similarPosterImg: {
    flex: 1,
  },
});
