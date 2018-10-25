// @flow
import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import moment from 'moment';

import { images } from '../../global';
import { styles } from './styles';
import { TextC } from '../TextC';

export const Footer = () => {
  const year = moment().format('YYYY');

  return (
    <View style={styles.footerContainer}>
      <Image
        style={styles.footerLogo}
        source={images.logoFooter}
        resizeMode="contain"
      />
      <TextC style={styles.footerText}>{`${year}, Все права защищены`}</TextC>
    </View>
  );
};
