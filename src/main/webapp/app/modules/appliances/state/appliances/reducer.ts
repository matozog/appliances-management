import { FAILURE, REQUEST, SUCCESS } from 'app/config/constants';

import { IAppliance } from '../../models/appliances.model';
import types from './types';

const initialState = {
  appliancesList: [] as IAppliance[],
  isLoading: false,
};

export type IAppliancesState = Readonly<typeof initialState>;

export default (state: IAppliancesState = initialState, action): IAppliancesState => {
  const { error, type, payload } = action;

  switch (type) {
    case REQUEST(types.FETCH_APPLIANCES):
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS(types.FETCH_APPLIANCES):
      return {
        ...state,
        appliancesList: payload.data,
        isLoading: false,
      };
    case FAILURE(types.FETCH_APPLIANCES):
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
