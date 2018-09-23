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
import { ConnectedSearch } from '../../containers/ConnectedSearch';

type Props = {
  id: number,
  bg: string,
  title: string,
  runtime: number,
  genres: Array<Object>,
  favourites: Array<Object>,
  navigation: Object,
  toggleFavourite: number => void,
  toggleModal: string => void,
  scrollTop: () => void,
};

export class HeaderMain extends Component<Props> {
  gradientTop = [...gradient].reverse();
  gradientBottom = [...gradient];

  gradientTop: Array<String>;
  gradientBottom: Array<String>;

  render() {
    const {
      id,
      bg,
      title,
      runtime,
      genres,
      favourites,
      navigation,
      toggleFavourite,
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
          <TextC style={styles.textNow}>
            Сейчас в кино
          </TextC>
          <TextC style={styles.textTitle}>
            {title}
          </TextC>

          {genres && (genres.length || runtime) ? (
            <View style={styles.textInfoContainer}>
              {genres.length ? genres.slice(0, 3).map(item => (
                <TextC style={styles.textInfo} key={item.id}>
                  {item.name}
                </TextC>
              )) : null
              }

              {genres.length && runtime ? (
                <View style={styles.textInfoDivide} />) : null
              }

              {runtime ? (
                <TextC style={styles.textInfo}>
                  {`${runtime} мин`}
                </TextC>) : null
              }
            </View>) : null
          }

          <View style={styles.buttonsContainer}>
            <Button type="primary" onPress={() => navigation.navigate('FilmPage', { id })}>
              Подробнее
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
