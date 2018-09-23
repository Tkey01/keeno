// @flow
import React, { Component } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Animated,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { styles } from './styles';
import { images, colors } from '../../global';
import { TouchButton } from '../TouchButton';

type State = {
  searchTextAnim: any,
};

type Props = {
  modal: Object,
  searchMovies: string => void,
  clearSearch: () => void,
  changeSearchText: string => void,
  toggleModal: string => void,
  result: Array<Object>,
  searchById: string => void,
};

export class Search extends Component<Props, State> {
  state = {
    searchTextAnim: new Animated.Value(1.5),
  }

  componentDidMount() {
    this.anime(1);
  }

  anime = (value: number) => {
    const { searchTextAnim } = this.state;

    Animated.spring(
      searchTextAnim,
      {
        toValue: value,
        duration: 500,
        useNativeDriver: true,
      },
    ).start();
  }

  handleChangeText = (text: string) => {
    const {
      clearSearch,
      changeSearchText,
      searchMovies,
    } = this.props;

    if (!text) {
      changeSearchText(text);
      clearSearch();
    } else {
      changeSearchText(text);
      searchMovies(text);
    }
  }

  closeModal = () => {
    const { clearSearch, toggleModal } = this.props;

    clearSearch();
    this.anime(0.025);
    setTimeout(() => { toggleModal('search'); }, 300);
  }

  render() {
    const {
      props: {
        modal,
        result,
        clearSearch,
        toggleModal,
        searchById,
      },
      state: {
        searchTextAnim,
      },
      handleChangeText,
      closeModal,
    } = this;

    return (
      <View style={styles.mainContainer}>
        <Animated.View style={[styles.searchContainer, { transform: [{ scale: searchTextAnim }] }]}>
          <TouchableWithoutFeedback>
            <View style={styles.searchControl}>
              <Image
                style={styles.searchControlIcon}
                source={images.searchTextIcon}
                resizeMode="contain"
              />
            </View>
          </TouchableWithoutFeedback>
          <TextInput
            style={styles.searchInput}
            placeholder="Найти по названию, жанру, актеру"
            onChangeText={handleChangeText}
            value={modal.search.text}
            autoFocus
          />
          <TouchableOpacity
            style={styles.searchControl}
            onPress={closeModal}
          >
            <Image
              style={styles.searchControlIcon}
              source={images.closeTextIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </Animated.View>

        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.searchResultList}
          alwaysBounceVertical={false}
        >
          {result.map(item => (
            <TouchButton
              key={item.id}
              style={styles.searchResultText}
              initColor={colors.gray500}
              onPress={() => {
                searchById(item.id);
                toggleModal('search');
                clearSearch();
              }}
            >
              {item.name}
            </TouchButton>
          ))}
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
