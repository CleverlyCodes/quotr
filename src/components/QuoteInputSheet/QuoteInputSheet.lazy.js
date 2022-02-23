import React, { lazy, Suspense } from 'react';

const LazyQuoteInputSheet = lazy(() => import('./QuoteInputSheet'));

const QuoteInputSheet = props => (
  <Suspense fallback={null}>
    <LazyQuoteInputSheet {...props} />
  </Suspense>
);

export default QuoteInputSheet;
