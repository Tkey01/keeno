// @flow
import React from 'react';
import {
  View,
} from 'react-native';

import { styles } from './styles';
import { ConnectedSearch } from '../../containers/ConnectedSearch';

type Props = {
  modal: Object,
  toggleModal: string => void,
};

export const ModalWrapper = ({ modal, toggleModal }: Props) => (
  modal.isOpen ? (
    <View style={styles.modalContainer}>
      {modal.search ? <ConnectedSearch toggleModal={toggleModal} /> : null}
    </View>
  ) : null
);
