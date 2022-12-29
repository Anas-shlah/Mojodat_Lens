import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PrimaryButton} from '../components/Buttons/CustomButton';
import {Card} from '../components/card';
import {COLORS} from '../constants';
import {scale} from 'react-native-size-matters';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle={'default'}
        backgroundColor={COLORS.primary1}
      />
      <TouchableOpacity
        style={styles.viewBarcode}
        onPress={() => {
          navigation.push('ScanBarcodeScreen', {typey: 'Home'});
        }}>
        <Icon name="qr-code-scanner" size={scale(110)} color="#ffffff" />
        <Text style={[styles.text, {color: COLORS.textP1}]}>Scan Barcode</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewSearch}
        onPress={() => {
          navigation.push('AssetSearch', {
            Barcodescan: '',
          });
        }}>
        <Icon name="search" size={scale(110)} color="#ffffff" />
        <Text style={[styles.text, {color: COLORS.textP2}]}>Search Asset</Text>
      </TouchableOpacity>

      <View style={styles.viewButton}>
        <Card style={{borderRadius: scale(25)}}>
          <PrimaryButton text={'OR'} />
        </Card>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  viewBarcode: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary1,
  },
  viewButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewSearch: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary2,
  },
  text: {
    margin: scale(5),
    fontSize: scale(35),
  },
});
