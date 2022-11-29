import { put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as homeActions from 'app/store/actions/homeActions';
import getFloodData from 'app/services/loginUser';

export default function* homeAsync() {
  const response = yield call(getFloodData);
  if (response.data) {
    yield put(homeActions.onFloodResponse(response.data));
    yield put(homeActions.disableLoader());
  } else {
    yield put(homeActions.loginFailed());
    yield put(homeActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Error', 'Could not fetch flood data');
    }, 200);
  }
}
