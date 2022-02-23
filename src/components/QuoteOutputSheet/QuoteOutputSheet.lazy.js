import React, { lazy, Suspense } from 'react';

const LazyQuoteOutputSheet = lazy(() => import('./QuoteOutputSheet'));

const QuoteOutputSheet = props => (
  <Suspense fallback={null}>
    <LazyQuoteOutputSheet {...props} />
  </Suspense>
);

export default QuoteOutputSheet;
