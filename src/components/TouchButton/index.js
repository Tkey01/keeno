// @flow
import React, { PureComponent } from 'react';
import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import { colors } from '../../global';
import { TextC } from '../Text';

type Props = {
  style: Array<Object>,
  initColor: string,
  children: string,
  onPress: () => void,
};

type State = {
  color: string,
}

export class TouchButton extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const { initColor } = this.props;

    this.state = {
      color: initColor,
    };
  }

  handlePressIn = () => {
    this.setState({ color: colors.purple });
  }

  handlePressOut = () => {
    const { initColor } = this.props;

    this.setState({ color: initColor });
  }

  render() {
    const { style, children, onPress } = this.props;
    const { color } = this.state;

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
        <View>
          <TextC style={[style, { color }]}>
            {children}
          </TextC>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
