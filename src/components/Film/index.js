// @flow
import React, { Component, type ElementRef } from 'react';
import {
  ScrollView,
} from 'react-native';

import { Wrapper } from '../Wrapper';
import { HeaderFilm } from '../HeaderFilm';
import { ModalWrapper } from '../ModalWrapper';
import { ContentFilm } from '../ContentFilm';
import { Footer } from '../Footer';

type Props = {
  id: number,
  bg: string,
  title: string,
  titleEN: string,
  runtime: number,
  genres: Array<Object>,
  favourites: [],
  navigation: Object,
  toggleFavourite: number => void,
  voteCount: number,
  voteAverage: number,
  toggleModal: string => void,
  modal: Object,
  tagline: string,
  overview: string,
  year: string,
  countries: Array<Object>,
  cast: Array<Object>,
  director: string,
  similar: Array<Object>,
  searchById: number => void,
};

export class Film extends Component<Props> {
  scrollTop = () => {
    this.refScrollView.scrollTo({ x: 0, y: 0, animated: true });
  }

  getScrollViewRef = (node: ElementRef<typeof ScrollView>) => { this.refScrollView = node; }

  refScrollView: ?ElementRef<typeof ScrollView>;


  render() {
    const {
      id,
      bg,
      title,
      titleEN,
      runtime,
      genres,
      favourites,
      navigation,
      toggleFavourite,
      voteCount,
      voteAverage,
      toggleModal,
      modal,
      tagline,
      overview,
      year,
      countries,
      cast,
      director,
      similar,
      searchById,
    } = this.props;

    return (
      <Wrapper
        modal={modal}
        setScrollViewRef={this.getScrollViewRef}
      >
        <HeaderFilm
          id={id}
          bg={bg}
          title={title}
          titleEN={titleEN}
          favourites={favourites}
          navigation={navigation}
          toggleFavourite={toggleFavourite}
          voteAverage={voteAverage}
          voteCount={voteCount}
          toggleModal={toggleModal}
          scrollTop={this.scrollTop}
        />

        <ContentFilm
          tagline={tagline}
          overview={overview}
          year={year}
          countries={countries}
          genres={genres}
          cast={cast}
          director={director}
          runtime={runtime}
          similar={similar}
          searchById={searchById}
          scrollTop={this.scrollTop}
        />

        <Footer />

        <ModalWrapper
          modal={modal}
          toggleModal={toggleModal}
        />
      </Wrapper>
    );
  }
}
