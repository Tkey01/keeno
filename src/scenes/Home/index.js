// @flow
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  navigation: Object,
};

export const Home = (props: Props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainPage')}>
        <Text style={styles.buttonText}>
          Главная
        </Text>
      </TouchableOpacity>
    </View>
  );
};
