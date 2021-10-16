import Appliances from './views/appliances/appliance';
import PrivateRoute from 'app/shared/auth/private-route';
import React from 'react';
import { Switch } from 'react-router-dom';

const VehiclesRoutes = () => {
  return (
    <div className="view-routes">
      <Switch>
        <PrivateRoute path="/vehicles" component={Appliances} />
      </Switch>
    </div>
  );
};

export default VehiclesRoutes;
