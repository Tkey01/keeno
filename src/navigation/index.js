import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { MainPage } from '../scenes/MainPage';
import { FilmPage } from '../scenes/FilmPage';
import { SortGenrePage } from '../scenes/SortGenrePage';
import { SortByPage } from '../scenes/SortByPage';

const styles = StyleSheet.create({
  cardStyle: {
    shadowOpacity: 0,
    elevation: 0,
  },
});

export const AppNavigator = createStackNavigator({
  Home: {
    screen: MainPage,
  },
  MainPage: {
    path: 'main-page',
    screen: MainPage,
  },
  FilmPage: {
    path: 'film-page',
    screen: FilmPage,
  },
  SortGenrePage: {
    path: 'sort-genre',
    screen: SortGenrePage,
  },
  SortByPage: {
    path: 'sort-by',
    screen: SortByPage,
  },
}, {
  headerMode: 'none',
  cardStyle: styles.cardStyle,
  navigationOptions: {
    header: null,
  },
});

export const Navigator = () => <AppNavigator />;
