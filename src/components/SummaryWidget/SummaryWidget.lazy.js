import React, { lazy, Suspense } from 'react';

const LazySummaryWidget = lazy(() => import('./SummaryWidget'));

const SummaryWidget = props => (
  <Suspense fallback={null}>
    <LazySummaryWidget {...props} />
  </Suspense>
);

export default SummaryWidget;
