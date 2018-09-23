import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, View, StatusBar } from 'react-native';

import { store } from './redux/store';
import { Navigator } from './navigation';

export const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </SafeAreaView>
);
