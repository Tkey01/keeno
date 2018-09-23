// @flow
import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/Button';
import { styles } from './styles';

export const Buttons = () => (
  <View style={styles.container}>
    <Button type="primary">
      Войти
    </Button>
    <Button type="favourite">
      В избранное
    </Button>
    <Button type="trailer">
      Трейлер
    </Button>
  </View>
);
