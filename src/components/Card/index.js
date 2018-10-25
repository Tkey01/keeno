// @flow
/* eslint camelcase: 0 */
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import { TextC } from '../TextC';
import { styles } from './styles';
import { rateConvert } from '../../services/helpers';
import { CONFIG } from '../../services/api';
import { Star } from '../Star';

type Props = {
  id: number,
  title: string,
  vote_average: number,
  poster_path: string,
  searchById: number => void,
  scrollTop: () => void,
};

export const Card = ({
  id,
  title,
  vote_average,
  poster_path,
  searchById,
  scrollTop,
}: Props) => (
  <TouchableOpacity
    style={styles.similarItem}
    onPress={() => { searchById(id); scrollTop(); }}
  >
    <View style={styles.similarTitleBlock}>
      <TextC style={styles.similarTitleBlockText}>
        {title}
      </TextC>
      <View style={styles.similarRateContainer}>
        {rateConvert(vote_average).map((item2, index) => (
          <Star
            key={index.toString()}
            starValue={item2}
            starSize="small"
          />
        ))}
      </View>
    </View>
    <View style={styles.similarPoster}>
      <Image
        style={styles.similarPosterImg}
        source={{ uri: `${CONFIG.IMAGE_BASE}/w300${poster_path}` }}
        resizeMode="cover"
      />
    </View>
  </TouchableOpacity>
);
