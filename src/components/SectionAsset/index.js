import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants';
import {scale} from 'react-native-size-matters';

const SectionAsset = ({Section}) => {
  return <Text style={styles.header}>{Section}</Text>;
};

export default SectionAsset;

const styles = StyleSheet.create({
  header: {
    fontSize: scale(30),
    fontWeight: 'bold',
    color: COLORS.primary2,
    textAlign: 'center',
    marginVertical: scale(5),
  },
});
