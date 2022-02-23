import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuoteOutputSheet from './QuoteOutputSheet';

describe('<QuoteOutputSheet />', () => {
  test('it should mount', () => {
    render(<QuoteOutputSheet />);
    
    const quoteOutputSheet = screen.getByTestId('QuoteOutputSheet');

    expect(quoteOutputSheet).toBeInTheDocument();
  });
});