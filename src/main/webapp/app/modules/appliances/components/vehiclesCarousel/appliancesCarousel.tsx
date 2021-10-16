import './appliancesCarousel.scss';

import React, { FC } from 'react';

import { IAppliance } from '../../models/appliances.model';
import ImageCarousel from 'app/components/imageCarousel/imageCarousel';

interface IAppliancesCarouselProps {
  appliancesList: IAppliance[];
}

const AppliancesCarousel: FC<IAppliancesCarouselProps> = ({ appliancesList }) => {
  const items: JSX.Element[] = appliancesList.map(appliance => (
    <div key={appliance.id} style={{ height: '400px' }}>
      <img className="img-fluid" alt="" src={appliance.img} />
    </div>
  ));

  return (
    <div className="h-100">
      <ImageCarousel carouselItems={items} />
    </div>
  );
};

export default AppliancesCarousel;
