import {
  StyleSheet,
  Text,
  SectionList,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLORS} from '../constants';
import Search from '../components/Input/Search';
import CardAsset from '../components/cardAsset';
import SectionAsset from '../components/SectionAsset';
import ModalAdd from '../components/Modal/Modaladd';
import ModalEdit from '../components/Modal/ModalEdit';

import {useSelector} from 'react-redux';

const AssetSearch = ({route, navigation}) => {
  const {Barcodescan} = route.params;
  const {asset, assetID} = useSelector(state => state.assetReducer);

  const [stateData, setStateData] = useState(asset);
  const [filter, setFilter] = useState('');
  const [modalMV, setModalMV] = useState({Visible: false});
  const [modalEdit, setModalEdit] = useState({
    Visible: false,
    Category: '',
    AssetDescription: '',
    Barcode: '',
  });

  const datafilter = [];

  useEffect(() => {
    setFilter(Barcodescan);
  }, [Barcodescan]);

  // function filtering data
  stateData.map(({data, Category}, index) => {
    if (Category.indexOf(filter) != -1) {
      datafilter.push(stateData[index]);
    } else {
      data.map((el, index2) => {
        if (el.Barcode.indexOf(filter) != -1) {
          datafilter.push({
            Category: stateData[index].Category,
            data: [data[index2]],
          });
        } else {
          if (el.AssetDescription.indexOf(filter) != -1) {
            datafilter.push({
              Category: stateData[index].Category,
              data: [data[index2]],
            });
          }
        }
      });
    }
  });

  return (
    <SafeAreaView style={styles.wallpaper}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        backgroundColor={COLORS.background}
      />
      <View style={styles.viewSearch}>
        <Search
          setFilter={setFilter}
          filter={filter}
          setModalMV={setModalMV}
          navigation={navigation}
        />
      </View>
      <SectionList
        sections={filter.length == 0 ? stateData : datafilter}
        showsVerticalScrollIndicator={false}
        renderItem={({item, section}) => (
          <CardAsset
            data={item}
            section={section}
            setModalEdit={setModalEdit}
          />
        )}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={data => (
          <SectionAsset Section={data.section.Category} />
        )}
        ListEmptyComponent={
          <Text style={styles.text}>
            You can press{' '}
            <Icon name="add-circle-outline" size={scale(20)} color="#000000" />{' '}
            in the search box to add a new Asset
          </Text>
        }
      />
      <ModalAdd modalMV={modalMV} setModalMV={setModalMV} />
      <ModalEdit modalEdit={modalEdit} setModalEdit={setModalEdit} />
    </SafeAreaView>
  );
};

export default AssetSearch;

const styles = StyleSheet.create({
  wallpaper: {
    flex: 1,
    paddingTop: scale(10),
    paddingHorizontal: scale(10),
  },
  text: {
    fontSize: scale(20),
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
