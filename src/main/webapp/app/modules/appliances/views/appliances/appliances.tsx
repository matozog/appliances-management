import './appliances.scss';

import React, { useState } from 'react';

import ActionsPanel from './components/actionsPanel';
import ApplianceTableInfo from '../../components/applianceTableInfo/applianceTableInfo';
import AppliancesCarousel from '../../components/vehiclesCarousel/appliancesCarousel';
import { IRootState } from 'app/config/store';
import { useSelector } from 'react-redux';

const Appliances = () => {
  const [isDetailsOpen, setDetailsOpen] = useState(false);

  const appliancesList = useSelector((state: IRootState) => state.appliances.appliances.appliancesList);

  const toggleDetailsState = () => setDetailsOpen(!isDetailsOpen);

  return (
    <div className="appliances-container">
      {/* <div className="appliances-actions-panel">
        <ActionsPanel toggleDetailsState={toggleDetailsState} />
      </div> */}
      <div className="appliances-carousel">
        <AppliancesCarousel appliancesList={appliancesList} />
      </div>
      <div className="appliances-table-info">
        <ApplianceTableInfo />
      </div>
    </div>
  );
};

export default Appliances;
