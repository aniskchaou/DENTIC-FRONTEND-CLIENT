import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditMedicamentManufacture from './EditMedicamentManufacture';

describe('<EditMedicamentManufacture />', () => {
  test('it should mount', () => {
    render(<EditMedicamentManufacture />);
    
    const editMedicamentManufacture = screen.getByTestId('EditMedicamentManufacture');

    expect(editMedicamentManufacture).toBeInTheDocument();
  });
});