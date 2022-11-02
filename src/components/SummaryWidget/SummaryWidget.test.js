import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryWidget from './SummaryWidget';

describe('<SummaryWidget />', () => {
  test('it should mount', () => {
    render(<SummaryWidget />);
    
    const summaryWidget = screen.getByTestId('SummaryWidget');

    expect(summaryWidget).toBeInTheDocument();
  });
});