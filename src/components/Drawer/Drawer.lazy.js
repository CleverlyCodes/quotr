import React, { lazy, Suspense } from 'react';

const LazyDrawer = lazy(() => import('./Drawer'));

const Drawer = props => (
  <Suspense fallback={null}>
    <LazyDrawer {...props} />
  </Suspense>
);

export default Drawer;
