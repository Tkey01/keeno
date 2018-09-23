// @flow
import { StyleSheet } from 'react-native';

import { scale, scaleByVertical } from '../../services/scale';

export const styles = StyleSheet.create({
  ratingContainer: {
    height: scaleByVertical(32),
    marginBottom: scaleByVertical(24),
    paddingHorizontal: scale(10),
    borderRadius: 5,
    backgroundColor: 'rgba(73, 76, 98, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingCountContainer: {
    flexDirection: 'row',
  },
  starContainer: {
    flexDirection: 'row',
  },
  ratingTextLeft: {
    fontSize: scaleByVertical(12),
    marginRight: scale(5),
  },
  ratingTextRight: {
    fontSize: scaleByVertical(14),
  },
  ratingTextCount: {
    fontWeight: 'bold',
  },
  starIcon: {
    width: scale(15),
    height: scaleByVertical(14),
    marginRight: scale(5),
    overflow: 'hidden',
  },
  starIconLast: {
    marginRight: 0,
  },
  starFill: {
    height: scaleByVertical(14),
    overflow: 'hidden',
  },
});
