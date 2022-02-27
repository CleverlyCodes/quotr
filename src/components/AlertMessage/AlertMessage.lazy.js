import React, { lazy, Suspense } from 'react';

const LazyAlertMessage = lazy(() => import('./AlertMessage'));

const AlertMessage = props => (
  <Suspense fallback={null}>
    <LazyAlertMessage {...props} />
  </Suspense>
);

export default AlertMessage;
