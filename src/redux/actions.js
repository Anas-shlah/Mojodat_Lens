export const SET_Asset = 'SET_Asset';
export const SET_Asset_ID = 'SET_Asset_ID';

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
