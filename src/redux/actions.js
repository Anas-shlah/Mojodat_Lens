export const SET_Asset = 'SET_Asset';
export const SET_Asset_ID = 'SET_Asset_ID';
export const GET_Asset = 'GET_Asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {data} from '../assets/data/data';

export const setAsset = asset => dispatch => {
  dispatch({
    type: SET_Asset,
    payload: asset,
  });
};

export const setAssetID = assetID => dispatch => {
  dispatch({
    type: SET_Asset_ID,
    payload: assetID,
  });
};

export const getAsset = asset => dispatch => {
  AsyncStorage.getItem('Asset').then(inidata => {
    if (inidata == null) {
      AsyncStorage.setItem('Asset', JSON.stringify(data));
      dispatch({
        type: GET_Asset,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_Asset,
        payload: JSON.parse(inidata),
      });
    }
  });
};
