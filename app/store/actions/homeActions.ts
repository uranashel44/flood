
import * as types from './types';
import { IFloodResponse } from 'app/models/api/home';

export function requestFloodData() {
  return {
    type: types.FLOOD_REQUEST,
  };
}

export function loginFailed() {
  return {
    type: types.FLOOD_FAILED,
  };
}

export function onFloodResponse(response: IFloodResponse) {
  return {
    type: types.FLOOD_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.FLOOD_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.FLOOD_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
