// @flow
import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import { images } from '../../global/index';
import { TextC } from '../TextC';
import { Card } from '../Card';

type Props = {
  tagline: string,
  overview: string,
  year: string,
  countries: Array<Object>,
  genres: Array<Object>,
  cast: Array<Object>,
  director: string,
  runtime: number,
  similar: Array<Object>,
  searchById: number => void,
  scrollTop: () => void,
};

export const ContentFilm = ({
  tagline,
  overview,
  year,
  countries,
  genres,
  cast,
  director,
  runtime,
  similar,
  searchById,
  scrollTop,
}: Props) => {
  const yearNumber = moment(year).format('YYYY');

  return (
    <View style={styles.contentContainer}>
      <View style={styles.filmInfoContainer}>
        {tagline ? (
          <View style={styles.quoteContainer}>
            <Image
              style={styles.quoteIcon}
              source={images.quote}
              resizeMode="contain"
            />
            <TextC style={styles.quoteText}>{tagline}</TextC>
          </View>) : null
        }

        {overview ? (
          <View style={styles.overviewContainer}>
            <TextC style={styles.contentTitle}>Описание:</TextC>
            <TextC style={styles.contentText}>{overview}</TextC>
          </View>) : null
        }

        <View style={styles.detailsContainer}>
          {year ? (
            <View style={styles.detailsRow}>
              <TextC style={[styles.contentTitle, styles.detailsTitle]}>Год:</TextC>
              <View>
                <TextC style={styles.contentText}>{yearNumber}</TextC>
                <View style={styles.detailsUnderLine} />
              </View>
            </View>) : null
          }

          {countries ? (
            <View style={styles.detailsRow}>
              <TextC style={[styles.contentTitle, styles.detailsTitle]}>Страны:</TextC>
              <View style={styles.detailsRowBlock}>
                {countries.map((item, index) => (
                  <View style={styles.detailesRowBlockCol} key={item.name}>
                    <TextC style={styles.contentText}>{item.name + (index === countries.length - 1 ? '' : ',')}</TextC>
                    <View style={styles.detailsUnderLine} />
                  </View>
                ))}
              </View>
            </View>) : null
          }

          {genres ? (
            <View style={styles.detailsRow}>
              <TextC style={[styles.contentTitle, styles.detailsTitle]}>Жанры:</TextC>
              <View style={styles.detailsRowBlock}>
                {genres.map((item, index) => (
                  <View style={styles.detailesRowBlockCol} key={item.id}>
                    <TextC style={styles.contentText}>{item.name + (index === genres.length - 1 ? '' : ',')}</TextC>
                    <View style={styles.detailsUnderLine} />
                  </View>
                ))}
              </View>
            </View>) : null
          }

          {director ? (
            <View style={styles.detailsRow}>
              <TextC style={[styles.contentTitle, styles.detailsTitle]}>Режиссер:</TextC>
              <View>
                <TextC style={styles.contentText}>{director}</TextC>
                <View style={styles.detailsUnderLine} />
              </View>
            </View>) : null
          }

          {cast ? (
            <View style={styles.detailsRow}>
              <TextC style={[styles.contentTitle, styles.detailsTitle]}>Актеры:</TextC>
              <View style={styles.detailsRowBlock}>
                {cast.slice(0, 6).map((item, index) => (
                  <View style={styles.detailesRowBlockCol} key={item.id}>
                    <TextC style={styles.contentText}>{item.name + (index === cast.length - 1 ? '' : ',')}</TextC>
                    <View style={styles.detailsUnderLine} />
                  </View>
                ))}
              </View>
            </View>) : null
          }

          {runtime ? (
            <View style={styles.detailsRow}>
              <TextC style={[styles.contentTitle, styles.detailsTitle]}>Время:</TextC>
              <TextC style={styles.contentText}>{`${runtime} мин`}</TextC>
            </View>) : null
          }
        </View>

        {similar.length ? (
          <View style={styles.similarContainer}>
            <TextC style={styles.similarTitle}>Похожие</TextC>
            <View style={styles.similarList}>
              {similar.map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  vote_average={item.vote_average}
                  poster_path={item.poster_path}
                  searchById={searchById}
                  scrollTop={scrollTop}
                />
              ))}
            </View>
          </View>) : null
        }
      </View>
    </View>
  );
};
