import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuoteInputSheet from './QuoteInputSheet';

describe('<QuoteInputSheet />', () => {
  test('it should mount', () => {
    render(<QuoteInputSheet />);
    
    const quoteInputSheet = screen.getByTestId('QuoteInputSheet');

    expect(quoteInputSheet).toBeInTheDocument();
  });
});