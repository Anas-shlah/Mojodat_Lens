import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';

const Search = props => {
  const {setFilter, filter, setModalMV, navigation} = props;

  const pressX = () => {
    setFilter('');
  };

  return (
    <View style={styles.container}>
      <Icon
        name="add-circle-outline"
        size={scale(30)}
        color="#000000"
        onPress={() => {
          setModalMV({Visible: true});
        }}
      />
      <TextInput
        placeholder="search now"
        style={styles.input}
        returnKeyType="search"
        value={filter}
        onChangeText={v => {
          setFilter(v.trimStart());
        }}
      />
      {filter.length == 0 ? (
        <Icon
          name="qr-code-scanner"
          size={scale(30)}
          color="#000000"
          onPress={() => {
            navigation.replace('ScanBarcodeScreen');
          }}
        />
      ) : (
        <Icon
          name="highlight-off"
          size={scale(30)}
          color="#000000"
          onPress={pressX}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFFFF',
    borderRadius: scale(25),
  },
  input: {
    fontSize: scale(20),
    textAlign: 'center',
  },
});
