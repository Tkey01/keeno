// @flow
import React, { type Node } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { TouchButton } from '../TouchButton';
import { images, colors } from '../../global';
import { TabPane } from '../TabPane';

type Props = {
  activeTab: number,
  children: Node,
  handleChangeTab: number => void,
  navigation: Object,
};

export const Tabs = ({
  children,
  activeTab,
  handleChangeTab,
  navigation,
}: Props) => (
  <View style={styles.containerMain}>
    <View style={styles.containerTabs}>
      {React.Children.map(children, (child, id) => (
        <TabPane
          id={id}
          active={activeTab === id}
          handleChange={handleChangeTab}
        >
          {child.props.children}
        </TabPane>
      ))}
      <TouchButton
        onPress={() => navigation.navigate('SortGenrePage', { activeTab })}
        style={styles.tab}
        initColor={colors.gray300}
      >
        Жанр
      </TouchButton>
    </View>

    <TouchableOpacity
      style={styles.filterButton}
      onPress={() => navigation.navigate('SortByPage', { activeTab })}
    >
      <Image
        style={styles.filterButtonImg}
        source={images.filter}
        resizeMode="contain"
      />
    </TouchableOpacity>
  </View>
);
