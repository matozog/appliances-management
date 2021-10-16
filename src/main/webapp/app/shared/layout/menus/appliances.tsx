import { NavItem, NavLink } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { Translate } from 'react-jhipster';
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

const AppliancesMenu = () => (
  <NavItem>
    <NavLink tag={Link} to="/vehicles" className="d-flex align-items-center">
      <FontAwesomeIcon icon={faLaptopHouse} />
      <span>
        <Translate contentKey="global.menu.appliancesMenu">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);

export default AppliancesMenu;
