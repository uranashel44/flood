import { IFloodResponse } from '../api/home';

export interface IHomeState {
  isLoggedIn: boolean;
  floodData?: IFloodResponse;
}
