import { IFeature, IFloodResponse } from 'app/models/api/home';

const selectHomeData = (state: any) => {
  return state.loginReducer;
};

export const selectFloodData = (state: any): IFloodResponse => {
  return selectHomeData(state).floodData;
};
export const selectFloodFeatureItems = (state: any): IFeature[] => {
  return selectFloodData(state)?.features ?? [];
};
export const selectFloodUpdated = (state: any): number => {
  return (
    selectHomeData(state)?.floodData?.lastPublished ?? new Date().getTime()
  );
};
