import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Dropdown} from 'react-native-element-dropdown';
import {scale} from 'react-native-size-matters';

const CustomDropdown = props => {
  const {data, setValueDropdown, valueDropdown} = props;
  return (
    <View>
      <Dropdown
        placeholder="Category"
        style={[styles.dropdown]}
        data={data}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        search
        maxHeight={scale(250)}
        labelField="Category"
        valueField="Category"
        searchPlaceholder="Search..."
        value={valueDropdown}
        onChange={item => {
          setValueDropdown(item.Category);
        }}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    fontSize: scale(20),
  },
  inputSearchStyle: {
    height: 40,
    fontSize: scale(20),
  },
});
