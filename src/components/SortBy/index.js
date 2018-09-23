// @flow
import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { TextC } from '../Text';

type Props = {
  sortFilter: string,
  sortGenre: number,
  navigation: Object,
  setSortFilter: number => void,
  clearList: () => void,
  fetchNowPlaying: (number, number, string) => void,
  fetchTop100: (number, number, string) => void,
};

const sortByList = [
  103,
  104,
  105,
];
/* eslint-disable */
const sortById = {
  '103': { id: 103, value: 'vote_average.desc', name: 'Популярности' },
  '104': { id: 104, value: 'release_date.desc', name: 'Дате' },
  '105': { id: 105, value: 'original_title.asc', name: 'Алфавиту' },
};
/* eslint-enable */

export const SortBy = ({
  sortFilter,
  sortGenre,
  navigation,
  setSortFilter,
  clearList,
  fetchNowPlaying,
  fetchTop100,
}: Props) => (
  <ScrollView style={styles.container}>
    <TextC style={styles.title}>Сортировать по</TextC>
    {sortByList.map(filter => (
      <TouchableOpacity
        key={filter}
        style={[styles.button, sortFilter === sortById[filter].value ? styles.buttonSelected : null]}
        onPress={() => {
          clearList();
          if (navigation.state.params.activeTab === 0) {
            fetchNowPlaying(1, sortGenre, sortById[filter].value);
          } else {
            fetchTop100(1, sortGenre, sortById[filter].value);
          }
          setSortFilter(sortById[filter].value);
          navigation.goBack();
        }}
      >
        <TextC
          style={[styles.text, sortFilter === sortById[filter].value ? styles.textSelected : null]}
        >
          {sortById[filter].name}
        </TextC>
      </TouchableOpacity>
    ))}
  </ScrollView>
);
