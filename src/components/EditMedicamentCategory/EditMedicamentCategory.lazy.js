import React, { lazy, Suspense } from 'react';

const LazyEditMedicamentCategory = lazy(() => import('./EditMedicamentCategory'));

const EditMedicamentCategory = props => (
  <Suspense fallback={null}>
    <LazyEditMedicamentCategory {...props} />
  </Suspense>
);

export default EditMedicamentCategory;
