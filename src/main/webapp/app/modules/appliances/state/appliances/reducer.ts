import { IAppliance } from '../../models/appliances.model';
import { appliancesMockData } from './mockedData';
import types from './types';

const initialState = {
  appliancesList: appliancesMockData,
};

export type IAppliancesState = Readonly<typeof initialState>;

export default (state: IAppliancesState = initialState, action): IAppliancesState => {
  const { type, payload } = action;

  if (type === types.FETCH_APPLIANCES) {
    return {
      ...state,
      appliancesList: payload.data,
    };
  }

  return state;
};
