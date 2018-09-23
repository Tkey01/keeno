// @flow
import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { TextC } from '../Text';

type Props = {
  sortGenre: number,
  sortFilter: string,
  genresById: Object,
  genresList: Array<number>,
  navigation: Object,
  setSortGenre: number => void,
  clearList: () => void,
  fetchNowPlaying: (number, number, string) => void,
  fetchTop100: (number, number, string) => void,
};

export const SortGenre = ({
  sortGenre,
  sortFilter,
  genresById,
  genresList,
  navigation,
  setSortGenre,
  clearList,
  fetchNowPlaying,
  fetchTop100,
}: Props) => (
  <ScrollView style={styles.container}>
    <TextC style={styles.title}>Выберите жанр</TextC>
    {genresList.map(genre => (
      <TouchableOpacity
        key={genre}
        style={[styles.button, sortGenre === genre ? styles.buttonSelected : null]}
        onPress={() => {
          clearList();
          if (navigation.state.params.activeTab === 0) {
            fetchNowPlaying(1, genre, sortFilter);
          } else {
            fetchTop100(1, genre, sortFilter);
          }
          setSortGenre(genre);
          navigation.goBack();
        }}
      >
        <TextC
          style={[styles.text, sortGenre === genre ? styles.textSelected : null]}
        >
          {genresById[genre].name}
        </TextC>
      </TouchableOpacity>
    ))}
  </ScrollView>
);
