// @flow
import React, { type Node } from 'react';
import { Text } from 'react-native';

import { styles } from './styles';
import { type TextStyle } from '../../global/types';

type Props = {
  children: Node,
  style: TextStyle,
}

export const TextC = ({
  children,
  style,
}: Props) => (
  <Text style={[styles.text, style]}>
    {children}
  </Text>
);
