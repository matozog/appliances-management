import Appliances from './views/appliances/appliances';
import PrivateRoute from 'app/shared/auth/private-route';
import React from 'react';
import { Switch } from 'react-router-dom';

const VehiclesRoutes = () => {
  return (
    <Switch>
      <PrivateRoute path="/vehicles" component={Appliances} />
    </Switch>
  );
};

export default VehiclesRoutes;
