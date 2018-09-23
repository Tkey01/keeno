// @flow
import React, { type Node } from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

type Props = {
  onPress: () => void,
  children: Node,
};

export const TouchableWrapper = ({ onPress, children }: Props) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View>
      {children}
    </View>
  </TouchableWithoutFeedback>
);
