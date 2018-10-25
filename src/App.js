import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import { Navigator } from './navigation';

export const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  </SafeAreaView>
);
