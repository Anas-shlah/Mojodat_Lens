import {SET_asset, SET_Asset_ID, GET_Asset} from './actions';

const initialState = {
  asset: [],
  assetID: 1,
};

console.log('initialState', initialState);
function assetReducer(state = initialState, action) {
  switch (action.type) {
    case SET_asset:
      return {...state, asset: action.payload};
    case SET_Asset_ID:
      return {...state, assetID: action.payload};
    case GET_Asset:
      return {...state, asset: action.payload};
    default:
      return state;
  }
}

export default assetReducer;
