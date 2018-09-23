// @flow
import React from 'react';
import {
  View,
  Image,
  ImageBackground,
} from 'react-native';

import { styles } from './styles';
import { TextC } from '../Text';
import { rateConvert, rateCount } from '../../services/helpers';
import { Star } from '../Star';

type Props = {
  voteAverage: number,
  voteCount: number,
};

export const Rating = ({ voteAverage, voteCount }: Props) => {
  const arrStar = rateConvert(voteAverage);
  const rate = rateCount(voteAverage);

  return (
    <View style={styles.ratingContainer}>
      <View style={styles.ratingCountContainer}>
        <TextC style={styles.ratingTextLeft}>
          Рейтинг
        </TextC>
        <TextC style={styles.ratingTextCount}>
          {rate}
        </TextC>
      </View>

      <View style={styles.starContainer}>
        {arrStar.map((width, index) => (
          <Star
            key={index}
            starWidth={width}
          />
        ))}
      </View>

      <View>
        <TextC style={styles.ratingTextRight}>
          {`${voteCount} отзывов`}
        </TextC>
      </View>
    </View>
  );
};
