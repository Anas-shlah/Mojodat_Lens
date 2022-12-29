import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants';
import {scale} from 'react-native-size-matters';

const PrimaryButton = props => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    backgroundColor: '#FFFFFF',
    borderRadius: scale(25),
  },
  text: {
    color: COLORS.primary2,
    textAlign: 'center',
    fontSize: scale(20),
  },
});
