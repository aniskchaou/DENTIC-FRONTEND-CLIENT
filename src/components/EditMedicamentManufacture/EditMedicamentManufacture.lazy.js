import React, { lazy, Suspense } from 'react';

const LazyEditMedicamentManufacture = lazy(() => import('./EditMedicamentManufacture'));

const EditMedicamentManufacture = props => (
  <Suspense fallback={null}>
    <LazyEditMedicamentManufacture {...props} />
  </Suspense>
);

export default EditMedicamentManufacture;
