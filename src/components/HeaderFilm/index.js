// @flow
import React, { Component } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { images } from '../../global/index';
import { Button } from '../Button';
import { TextC } from '../Text';
import { gradient } from '../../global/colors';
import { HeaderUserLine } from '../HeaderUserLine';
import { Rating } from '../Rating';
import { ConnectedSearch } from '../../containers/ConnectedSearch';

type Props = {
  id: number,
  bg: string,
  title: string,
  titleEN: string,
  favourites: [],
  navigation: Object,
  toggleFavourite: number => void,
  voteAverage: number,
  voteCount: number,
  toggleModal: string => void,
  scrollTop: () => void,
};

export class HeaderFilm extends Component<Props> {
  gradientTop = [...gradient].reverse();
  gradientBottom = [...gradient];

  gradientTop: Array<String>;
  gradientBottom: Array<String>;

  render() {
    const {
      id,
      bg,
      title,
      titleEN,
      favourites,
      navigation,
      toggleFavourite,
      voteAverage,
      voteCount,
      toggleModal,
      scrollTop,
    } = this.props;

    const favourite = favourites[id];

    return (
      <ImageBackground
        style={styles.headerContainer}
        source={{ uri: `${bg}` }}
      >
        <LinearGradient
          colors={this.gradientTop}
          style={styles.topShadow}
        />
        <LinearGradient
          colors={this.gradientBottom}
          style={styles.bottomShadow}
        />

        <HeaderUserLine
          navigation={navigation}
          toggleModal={toggleModal}
          scrollTop={scrollTop}
        />

        <View style={styles.bottomContainer}>
          <TextC style={styles.textTitle}>
            {title}
          </TextC>

          <TextC style={styles.alternateTitle}>
            {titleEN}
          </TextC>

          <Rating
            voteCount={voteCount}
            voteAverage={voteAverage}
          />

          <View style={styles.buttonsContainer}>
            <Button type="trailer" onPress={() => navigation.goBack()}>
              Трейлер
            </Button>

            <Button
              type="favourite"
              heart={favourite ? images.heartFill : images.heart}
              onPress={() => toggleFavourite(id)}
            >
              {favourite ? 'В избранном' : 'В избранное'}
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
