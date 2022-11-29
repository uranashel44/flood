/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';

export default function* watch() {
  yield all([takeEvery(types.FLOOD_REQUEST, loginSaga)]);
}
