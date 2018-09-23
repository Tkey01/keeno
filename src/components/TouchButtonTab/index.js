// @flow
import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import { TextC } from '../Text';
import { styles } from './styles';
import { colors } from '../../global';

type Props = {
  style: Array<Object>,
  active: boolean,
  children: string,
  onPress: () => void,
};

export const TouchButtonTab = ({
  style,
  active,
  children,
  onPress,
}: Props) => (
  <TouchableWithoutFeedback
    onPress={onPress}
  >
    <View>
      <TextC style={[style, { color: active ? colors.purple : colors.gray300 }]}>
        {children}
      </TextC>
      {active ? <View style={styles.borderBottom} /> : null}
    </View>
  </TouchableWithoutFeedback>
);
