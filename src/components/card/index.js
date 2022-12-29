import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export const Card = props => {
  const {style, ...rest} = props;

  return <View {...rest} style={[styles.container, style]}></View>;
};

export default Card;
