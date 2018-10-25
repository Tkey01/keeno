// @flow
import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { images } from '../../global/index';
import { Button } from '../Button';

type Props = {
  navigation: Object,
  toggleModal: string => void,
  scrollTop: () => void,
};

export const HeaderUserLine = ({
  navigation,
  toggleModal,
  scrollTop,
}: Props) => (
  <View style={styles.topContainer}>
    <TouchableOpacity>
      <Image
        source={images.logo}
        style={styles.logo}
        resizeMode="contain"
      />
    </TouchableOpacity>

    <View style={styles.loginContainer}>
      <TouchableOpacity onPress={() => { toggleModal('search'); scrollTop(); }}>
        <Image
          style={styles.searchIcon}
          source={images.searchIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Button type="primary">
        Войти
      </Button>
    </View>
  </View>
);
