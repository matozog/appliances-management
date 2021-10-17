import { FAILURE, REQUEST, SUCCESS } from 'app/config/constants';

import { IAppliance } from '../../models/appliances.model';
import MockAdapter from 'axios-mock-adapter';
import { appliancesMockData } from './mockedData';
import axios from 'axios';
import types from './types';

const requestAxios = axios.create();
const mockAxios = new MockAdapter(requestAxios, { delayResponse: 2000 });

mockAxios.onGet('/api/appliances/getAll').reply(200, appliancesMockData);

// FETCH APPLIANCES
const prepareFetchAppliances = () => ({
  type: REQUEST(types.FETCH_APPLIANCES),
});

const fetchAppliancesData = () => {
  const requestUrl = '/api/appliances/getAll';

  return dispatch =>
    requestAxios
      .get<IAppliance[]>(requestUrl)
      .then(res => {
        dispatch({
          type: SUCCESS(types.FETCH_APPLIANCES),
          payload: {
            data: res.data,
          },
        });
      })
      .catch(error =>
        dispatch({
          type: FAILURE(types.FETCH_APPLIANCES),
          error,
        })
      );
};

const fetchAppliances = () => dispatch => {
  dispatch(prepareFetchAppliances());
  dispatch(fetchAppliancesData());
};

export { fetchAppliances };
