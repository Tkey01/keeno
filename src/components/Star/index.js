// @flow
import React from 'react';
import {
  Image,
} from 'react-native';

import { images } from '../../global';
import { styles } from './styles';

type Props = {
  starValue: number,
  starSize: string,
};

export const Star = ({
  starValue,
  starSize,
}: Props) => (
  <Image
    style={starSize === 'big' ? styles.starBig : styles.starSmall}
    source={images[`star${starValue}`]}
    resizeMode="contain"
  />
);
