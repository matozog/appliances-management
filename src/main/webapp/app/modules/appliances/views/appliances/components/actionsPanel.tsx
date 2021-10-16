import React, { FC } from 'react';

import { Button } from 'reactstrap';

interface IActionsPanelProps {
  toggleDetailsState: () => void;
}

const ActionsPanel: FC<IActionsPanelProps> = ({ toggleDetailsState }) => {
  return (
    <div className="h-100 d-flex justify-content-center">
      <Button variant="secondary" onClick={toggleDetailsState}>
        Show details
      </Button>
      <Button className="ml-2" variant="success">
        Add new appliance
      </Button>
    </div>
  );
};

export default ActionsPanel;
