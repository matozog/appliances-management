import './accordionPane.scss';

import React, { FC, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface IAccordionPaneProps {
  paneTitle: string;
  styles?: React.CSSProperties;
}

const AccordionPane: FC<IAccordionPaneProps> = props => {
  const [isOpen, setOpen] = useState(false);
  const { paneTitle, styles } = props;

  const togglePane = () => setOpen(!isOpen);

  return (
    <div className="accordion-pane-container" style={styles}>
      <div className="accordion-pane-header" onClick={togglePane}>
        <FontAwesomeIcon icon={faBars} />
        <span className="ml-3">{paneTitle}</span>
      </div>
      {isOpen && props.children}
    </div>
  );
};

export default AccordionPane;
