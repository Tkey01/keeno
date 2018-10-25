// @flow
import React, { PureComponent } from 'react';
import {
  View,
  FlatList,
  StatusBar,
} from 'react-native';

import { HeaderMain } from '../HeaderMain';
import { Tabs } from '../Tabs';
import { TabPane } from '../TabPane';
import { Card } from '../Card';
import { Footer } from '../Footer';
import { ModalWrapper } from '../ModalWrapper';
import { Preloader } from '../Preloader';
import { styles } from './styles';

type State = {
  activeTab: number,
  page: number,
  isLoading: boolean,
};

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
  searchById: number => void,
  fetchNowPlaying: (number, number, string) => void,
  fetchTop100: (number, number, string) => void,
  modal: Object,
  filmsList: Array<Object>,
  clearList: () => void,
  setSortGenre: number => void,
  activeGenre: number,
  activeSort: string,
  pages: number,
  // persistor: Object,
};

export class Main extends PureComponent<Props, State> {
  state = {
    activeTab: 0,
    page: 1,
    isLoading: false,
  }

  componentWillReceiveProps(nextProps: Props) {
    const { filmsList } = this.props;

    if (nextProps.filmsList.length !== filmsList.length) {
      this.setState({ isLoading: false });
    }

    if (nextProps.filmsList.length === 0) {
      this.setState({ isLoading: true });
    }
  }

  getFlatListRef = (node: any) => {
    this.FlatListRef = node;
  }

  handleChangeTab = (id: number) => {
    const {
      clearList,
      fetchNowPlaying,
      fetchTop100,
      // persistor,
    } = this.props;

    const { activeTab } = this.state;
    const { activeGenre, activeSort } = this.props;

    if (activeTab !== id) {
      // console.log('CHANGE_TAB');
      clearList();
      // persistor.purge();
      if (id === 0) {
        fetchNowPlaying(1, activeGenre, activeSort);
      } else {
        fetchTop100(1, activeGenre, activeSort);
      }
      this.setState({ activeTab: id, page: 1, isLoading: true });
    }
  }

  scrollTop = () => {
    this.FlatListRef.scrollToOffset({ offset: 0, animated: true });
  }

  handleLoadMore = () => {
    const { page, isLoading, activeTab } = this.state;
    const {
      fetchNowPlaying,
      fetchTop100,
      activeGenre,
      activeSort,
    } = this.props;

    // console.log('HANDLE_LOAD');

    if (!isLoading) {
      if (activeTab === 0) {
        this.setState({ page: page + 1, isLoading: true });
        fetchNowPlaying(page + 1, activeGenre, activeSort);
      } else {
        this.setState({ page: page + 1, isLoading: true });
        fetchTop100(page + 1, activeGenre, activeSort);
      }
    }
  }

  keyExtractor = item => `${item.id}`;

  FlatListRef: any;
  keyExtractor: Object => string;

  renderItem = ({ item }: Object) => {
    const {
      props: {
        searchById,
      },
      scrollTop,
    } = this;

    return (
      <Card
        id={item.id}
        title={item.title}
        vote_average={item.vote_average}
        poster_path={item.poster_path}
        searchById={searchById}
        scrollTop={scrollTop}
      />
    );
  }

  renderHeader = () => {
    const {
      props: {
        id,
        bg,
        title,
        runtime,
        genres,
        favourites,
        navigation,
        toggleFavourite,
        toggleModal,
        setSortGenre,
      },
      state: {
        activeTab,
      },
      handleChangeTab,
      scrollTop,
    } = this;

    return (
      <View>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#111"
        />

        <HeaderMain
          id={id}
          bg={bg}
          title={title}
          runtime={runtime}
          genres={genres}
          favourites={favourites}
          navigation={navigation}
          toggleFavourite={toggleFavourite}
          toggleModal={toggleModal}
          scrollTop={scrollTop}
        />

        <Tabs
          activeTab={activeTab}
          handleChangeTab={handleChangeTab}
          navigation={navigation}
          setSortGenre={setSortGenre}
        >
          <TabPane>Сейчас в кино</TabPane>
          <TabPane>Топ 100</TabPane>
        </Tabs>
      </View>
    );
  }

  renderFooter = () => {
    const { isLoading } = this.state;

    return (
      <View>
        {isLoading ? <Preloader /> : null}
        <Footer />
      </View>
    );
  }

  render() {
    const {
      props: {
        modal,
        toggleModal,
        filmsList,
      },
      renderItem,
      renderHeader,
      renderFooter,
      getFlatListRef,
      keyExtractor,
      handleLoadMore,
    } = this;

    const extraData = {};

    // console.log('RENDER');
    // console.log('LOADING ? - ' + this.state.isLoading);

    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <FlatList
          data={filmsList}
          extraData={extraData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          numColumns={2}
          columnWrapperStyle={styles.row}
          ref={getFlatListRef}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={1}
          keyboardShouldPersistTaps="handled"
        />

        <ModalWrapper
          modal={modal}
          toggleModal={toggleModal}
        />
      </View>
    );
  }
}
