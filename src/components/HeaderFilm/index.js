// @flow
import React, { Component } from 'react';
import {
  View,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';
import { Button } from '../Button';
import { TextC } from '../TextC';
import { gradient } from '../../global/colors';
import { HeaderUserLine } from '../HeaderUserLine';
import { Rating } from '../Rating';
import { ConnectedToggleFavourite } from '../../containers/ConnectedToggleFavourite';

type Props = {
  id: number,
  bg: string,
  title: string,
  titleEN: string,
  navigation: Object,
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
      navigation,
      voteAverage,
      voteCount,
      toggleModal,
      scrollTop,
    } = this.props;

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

            <ConnectedToggleFavourite id={id} />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
