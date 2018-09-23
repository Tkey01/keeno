// @flow
import { StyleSheet } from 'react-native';

import { colors } from '../../global';
import { scale, scaleByVertical } from '../../services/scale';

export const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: scale(10),
    paddingTop: scaleByVertical(24),
    paddingBottom: scaleByVertical(14),
  },
  filmInfoContainer: {
  },

  quoteContainer: {
    marginBottom: scaleByVertical(24),
    flexDirection: 'row',
  },
  quoteIcon: {
    width: scale(12),
    height: scaleByVertical(8),
  },
  quoteText: {
    fontSize: scaleByVertical(16),
    color: colors.gray500,
    marginLeft: scale(10),
  },

  overviewContainer: {
    marginBottom: scaleByVertical(24),
  },
  contentTitle: {
    color: colors.gray500,
    opacity: 0.54,
    fontSize: scaleByVertical(14),
    fontWeight: '300',
    marginBottom: scaleByVertical(5),
  },
  contentText: {
    fontSize: scaleByVertical(14),
    color: colors.gray500,
  },

  detailsContainer: {
    marginBottom: scaleByVertical(24),
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: scaleByVertical(14),
  },
  detailsTitle: {
    width: scale(75),
    textAlign: 'right',
    marginRight: scale(5),
  },
  detailsUnderLine: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray500,
    opacity: 0.3,
    marginTop: scaleByVertical(2),
  },
  detailsRowBlock: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  detailesRowBlockCol: {
    marginRight: scale(5),
  },

  similarContainer: {
  },
  similarTitle: {
    color: colors.gray300,
    fontSize: scaleByVertical(14),
    marginBottom: scaleByVertical(8),
  },
  similarList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});
