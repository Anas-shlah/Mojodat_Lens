import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import assetReducer from './reducers';

const rootReducer = combineReducers({assetReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
