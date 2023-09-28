// reducers.js
import { combineReducers } from 'redux';
import waybillReducer from './waybill';
import wilayahReducer from './wilayah';

const rootReducer = combineReducers({
  waybill: waybillReducer,
  wilayah: wilayahReducer,
});

export default rootReducer;
