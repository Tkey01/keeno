// @flow
import React from 'react';
import {
} from 'react-native';

import { styles } from './styles';
import { TouchButtonTab } from '../TouchButtonTab';
// import { CONFIG } from '../../services/api';

type Props = {
  id: number,
  active: boolean,
  handleChange: number => void,
  children: string,
};

export const TabPane = ({
  id,
  active,
  handleChange,
  children,
}: Props) => (
  <TouchButtonTab
    onPress={() => { handleChange(id); }}
    style={styles.tab}
    active={active}
  >
    {children}
  </TouchButtonTab>
);
