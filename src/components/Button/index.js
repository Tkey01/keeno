// @flow
import React, { type Node } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { images, colors } from '../../global/index';

type Props = {
  type: string,
  children: Node,
  heart: string,
  onPress: () => void,
};

const sw = (props: Props) => {
  const {
    type,
    children,
    heart,
    onPress,
  } = props;

  switch (type) {
    case 'primary':
      return (
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={onPress}>
          <LinearGradient
            colors={[colors.darkpurple, colors.purple]}
            style={styles.containerPrimary}
          >
            <Text style={[styles.buttonText, styles.buttonPrimaryText]}>
              {children}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    case 'trailer':
      return (
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={onPress}>
          <LinearGradient
            colors={[colors.darkpurple, colors.purple]}
            style={styles.containerPrimary}
          >
            <Image
              style={[styles.image, styles.imageTriangle]}
              source={images.triangle}
              resizeMode="contain"
            />
            <Text style={[styles.buttonText, styles.buttonPrimaryText]}>
              {children}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      );
    default:
      return (
        <TouchableOpacity style={[styles.button, styles.buttonTransparent]} onPress={onPress}>
          <Image
            style={[styles.image, styles.imageHeart]}
            source={heart}
            resizeMode="contain"
          />
          <Text style={[styles.buttonText, styles.buttonTransparentText]}>
            {children}
          </Text>
        </TouchableOpacity>
      );
  }
};

export const Button = (props: any) => sw(props);
