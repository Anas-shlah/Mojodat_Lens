import {
  Modal,
  Pressable,
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomDropdown from '../CustomDropdown/index';
import {handlingBarcode} from '../../utils/handlingBarcode';
import {COLORS, errorMassag} from '../../constants';

import {useDispatch, useSelector} from 'react-redux';
import {setAsset} from '../../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ModalAdd = props => {
  const {modalMV, setModalMV} = props;
  const [valueDropdown, setValueDropdown] = useState('');
  const [valueBarcode, setValueBarcode] = useState({
    handling: 'initial',
    value: '',
  });
  const [valueName, setValueName] = useState({
    handling: '',
    value: '',
  });
  const {asset} = useSelector(state => state.assetReducer);
  const dispatch = useDispatch();

  const addAsset = () => {
    if (
      valueDropdown.length > 0 &&
      valueBarcode.handling == true &&
      valueName.handling == true
    ) {
      try {
        var Asset = [
          {
            AssetDescription: valueName.value,
            Barcode: valueBarcode.value,
          },
        ];
        const index = asset.findIndex(el => el.Category == valueDropdown);
        let newAsset = [];

        newAsset = [...asset];
        newAsset[index].data.push(...Asset);

        AsyncStorage.setItem('Asset', JSON.stringify(newAsset))
          .then(() => {
            dispatch(setAsset(newAsset));
            onclose();
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };
  const onclose = () => {
    setValueDropdown('');
    setValueBarcode({handling: 'initial', value: ''});
    setValueName({handling: '', value: ''});
    setModalMV({Visible: !modalMV.Visible});
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalMV.Visible}
        onRequestClose={onclose}>
        <View style={styles.centeredView2}>
          <View style={styles.modalView}>
            <Text style={styles.title}>ADD Asset</Text>
            <CustomDropdown
              data={asset}
              valueDropdown={valueDropdown}
              setValueDropdown={setValueDropdown}
            />
            {valueDropdown.length == 0 ? (
              <Text style={[styles.error]}>{errorMassag.selectCategory}</Text>
            ) : null}
            <View style={[styles.horizontal, {justifyContent: 'space-around'}]}>
              <TextInput
                placeholder="Barcode"
                style={styles.textInput}
                keyboardType={'number-pad'}
                onChangeText={v =>
                  setValueBarcode({
                    value: v.trimStart(),
                    handling: handlingBarcode(v, asset),
                  })
                }
                value={valueBarcode.value}
              />
              <Icon name="qr-code-scanner" size={scale(25)} color="#808080" />
            </View>
            {valueBarcode.handling == false ? (
              <Text style={[styles.error]}>{errorMassag.barcodeExists}</Text>
            ) : valueBarcode.value.length == 0 ? (
              <Text style={[styles.error]}>{errorMassag.fillBarcode}</Text>
            ) : null}
            <TextInput
              placeholder="name Asset"
              style={styles.textInput}
              onChangeText={v =>
                setValueName({
                  value: v.trimStart(),
                  handling: v.trimStart().length != 0 ? true : false,
                })
              }
              value={valueName.value}
            />
            {valueName.handling == false ? (
              <Text style={[styles.error]}>{errorMassag.fillName}</Text>
            ) : null}
            <View style={[styles.horizontal, {justifyContent: 'space-around'}]}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onclose}>
                <Text style={[styles.textbuttonClose, styles.textStyle]}>
                  Close
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonSave]}
                onPress={() => {
                  addAsset();
                }}>
                <Text style={[styles.textbuttonSave, styles.textStyle]}>
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAdd;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView2: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    margin: scale(30),
    backgroundColor: 'white',
    borderRadius: scale(20),
    padding: scale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: scale(23),
    color: COLORS.primary1,
    fontWeight: 'bold',
    marginBottom: scale(20),
  },
  button: {
    borderRadius: scale(15),
    padding: scale(10),
    marginTop: scale(10),
  },
  buttonClose: {},
  buttonSave: {
    backgroundColor: COLORS.primary2,
    elevation: scale(2),
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: scale(20),
  },
  textbuttonClose: {
    color: '#2196F3',
  },
  textbuttonSave: {
    color: '#FFF',
  },
  textInput: {
    fontSize: scale(20),
    color: '#000',
    borderBottomWidth: 1,
    marginVertical: scale(5),
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  error: {
    fontSize: scale(15),
    color: 'red',
    textAlign: 'center',
  },
});
