import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditMedicamentCategory from './EditMedicamentCategory';

describe('<EditMedicamentCategory />', () => {
  test('it should mount', () => {
    render(<EditMedicamentCategory />);
    
    const editMedicamentCategory = screen.getByTestId('EditMedicamentCategory');

    expect(editMedicamentCategory).toBeInTheDocument();
  });
});