// @flow
import React, { Component } from 'react';
import {
  View,
  Animated,
} from 'react-native';

import { styles } from './styles';
import { TextC } from '../TextC';
import { scaleByVertical } from '../../services/scale';

const animations = [
  {
    id: 231,
    animation: new Animated.Value(1),
    toValue: 2,
    duration: 300,
    height: scaleByVertical(12),
  },
  {
    id: 232,
    animation: new Animated.Value(1),
    toValue: 2.5,
    duration: 400,
    height: scaleByVertical(19),
  },
  {
    id: 233,
    animation: new Animated.Value(1),
    toValue: 0.5,
    duration: 200,
    height: scaleByVertical(25),
  },
  {
    id: 234,
    animation: new Animated.Value(1),
    toValue: 2.8,
    duration: 500,
    height: scaleByVertical(17),
  },
  {
    id: 235,
    animation: new Animated.Value(1),
    toValue: 0.4,
    duration: 400,
    height: scaleByVertical(25),
  },
  {
    id: 236,
    animation: new Animated.Value(1),
    toValue: 2,
    duration: 300,
    height: scaleByVertical(17),
  },
];

export class Preloader extends Component<any, any> {
  valuesArray = [];

  componentWillMount() {
    animations.forEach((item, index) => { this.valuesArray[index] = item.toValue; });
  }

  componentDidMount() {
    animations.forEach((item, index) => { this.anime(this.valuesArray[index], index, animations[index].duration); });
  }

  anime = (value: number, index: number, duration: number) => {
    // console.log('ANIME');
    // console.log('VALUE ' + value);

    if (value === animations[index].toValue) {
      this.valuesArray[index] = 1;
    } else {
      this.valuesArray[index] = animations[index].toValue;
    }

    Animated.timing(
      animations[index].animation,
      {
        toValue: value,
        duration,
        useNativeDriver: true,
      },
    ).start((o) => {
      if (o.finished) {
        this.anime(this.valuesArray[index], index, animations[index].duration);
      }
    });
  }

  render() {
    // console.log('RENDER');
    return (
      <View style={styles.preloaderContainer}>
        <View style={styles.rectContainer}>
          {animations.map(item => (
            <Animated.View
              key={item.id}
              style={[
                styles.rect,
                {
                  height: item.height,
                  transform: [{ scaleY: item.animation }],
                },
              ]}
            />
          ))}
        </View>
        <TextC style={styles.preloaderText}>
          Загрузка
        </TextC>
      </View>
    );
  }
}
