import AppRoutes from './routes';
import { Card } from 'reactstrap';
import ErrorBoundary from './shared/error/error-boundary';
import React from 'react';

const AppContent = () => {
  return (
    <div className="container-fluid view-container" id="app-view-container">
      {/* <Card className="jh-card"> */}
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
      {/* </Card> */}
    </div>
  );
};

export default AppContent;
