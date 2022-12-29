import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../constants';

const CardAsset = props => {
  const {data, section, setModalEdit} = props;

  return (
    <View style={styles.wallpaper}>
      <View style={[styles.horizontal, {justifyContent: 'space-between'}]}>
        <View style={styles.vertical}>
          <View style={styles.horizontal}>
            <Text style={[styles.text]}>{data.AssetDescription}</Text>
          </View>

          <View style={styles.horizontal}>
            <Icon name="qr-code-2" size={scale(15)} color="#000000" />
            <Text> </Text>
            <Text style={[styles.textBarcode]}>{data.Barcode}</Text>
          </View>
        </View>
        <Icon
          name="edit"
          size={scale(25)}
          color="#808080"
          onPress={() => {
            setModalEdit({
              Visible: true,
              Category: section.Category,
              AssetDescription: data.AssetDescription,
              Barcode: data.Barcode,
            });
          }}
        />
      </View>
    </View>
  );
};

export default CardAsset;

const styles = StyleSheet.create({
  wallpaper: {
    marginVertical: scale(5),
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vertical: {
    flexDirection: 'column',
  },
  text: {color: COLORS.primary1, fontSize: scale(25)},
  textBarcode: {
    color: '#000',
    fontSize: scale(15),
  },
});
