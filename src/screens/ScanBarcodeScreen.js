import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';
import Barcode from '../components/Barcode/Barcode.js';

const ScanBarcodeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden />
      <Barcode navigation={navigation} />
    </View>
  );
};

export default ScanBarcodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
});
