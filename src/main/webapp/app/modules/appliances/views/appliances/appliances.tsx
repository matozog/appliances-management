import './appliances.scss';

import * as appliancesDuck from 'app/modules/appliances/state/appliances';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AccordionPane from '../../components/accordionPane/accordionPane';
import ApplianceTableInfo from '../../components/applianceTableInfo/applianceTableInfo';
import AppliancesCarousel from '../../components/vehiclesCarousel/appliancesCarousel';
import { IRootState } from 'app/config/store';

const Appliances = () => {
  const appliancesList = useSelector((state: IRootState) => state.appliances.appliances.appliancesList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appliancesDuck.operations.fetchAppliances());
  }, []);

  return (
    <div className="appliances-container">
      <AccordionPane paneTitle="Appliance name" styles={{ marginBottom: '1em' }}>
        <AppliancesCarousel appliancesList={appliancesList} />
      </AccordionPane>
      <AccordionPane paneTitle="Additionaly information">
        <ApplianceTableInfo />
      </AccordionPane>
    </div>
  );
};

export default Appliances;
