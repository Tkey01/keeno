// @flow
import React, { type Node, type ElementRef } from 'react';
import {
  ScrollView,
  StatusBar,
} from 'react-native';

import { styles } from './styles';

type Props = {
  children: Node,
  modal: Object,
  setScrollViewRef: ElementRef<typeof ScrollView> => void,
};

export const Wrapper = ({
  children,
  modal,
  setScrollViewRef,
}: Props) => (
  <ScrollView
    style={styles.wrapper}
    keyboardShouldPersistTaps="handled"
    scrollEnabled={!modal.isOpen}
    ref={setScrollViewRef}
  >
    <StatusBar
      barStyle="light-content"
      backgroundColor="#111"
    />
    {children}
  </ScrollView>
);
