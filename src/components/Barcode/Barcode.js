import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import {scale} from 'react-native-size-matters';
import {COLORS, SIZES} from '../../constants';

const Barcode = ({navigation}) => {
  const [flash, setFlash] = useState(true);
  const flashName = flash ? 'flash-off' : 'flash-on';
  const flashCamera = flash
    ? RNCamera.Constants.FlashMode.torch
    : RNCamera.Constants.FlashMode.off;

  const stateFlash = () => {
    setFlash(!flash);
  };

  const onSuccess = e => {
    console.log(e.data);
    navigation.replace('AssetSearch', {
      Barcodescan: e.data,
    });
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={flashCamera}
      topContent={<Text style={styles.centerText}>scan Barcode</Text>}
      showMarker={true}
      markerStyle={styles.marker}
      reactivate
      reactivateTimeout={1000}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable} onPress={stateFlash}>
          <Icon name={flashName} size={scale(30)} color="#ffffff" />
        </TouchableOpacity>
      }
    />
  );
};

export default Barcode;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: scale(30),
    padding: scale(32),
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  marker: {
    borderColor: COLORS.primary2,
    height: SIZES.height / 4,
  },
  buttonTouchable: {
    marginTop: scale(30),
    borderWidth: 2,
    borderRadius: scale(30),
    borderColor: '#FFF',
    padding: scale(10),
  },
});
