/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IHomeState } from 'app/models/reducers/home';
import {
  ILoginRequestState,
  ILoginResponseState,
} from 'app/models/actions/login';
const initialState: IHomeState = {
  isLoggedIn: false,
  floodData: {},
};

export const loginReducer = createReducer(initialState, {
  [types.FLOOD_REQUEST](state: IHomeState, action: ILoginRequestState) {
    return {
      ...state,
    };
  },
  [types.FLOOD_LOADING_ENDED](state: IHomeState) {
    return { ...state };
  },
  [types.FLOOD_RESPONSE](state: IHomeState, action: ILoginResponseState) {
    return {
      ...state,
      floodData: action.response
    };
  },
  [types.FLOOD_FAILED](state: IHomeState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state: IHomeState) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
