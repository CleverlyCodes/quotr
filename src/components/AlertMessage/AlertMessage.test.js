import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AlertMessage from './AlertMessage';

describe('<AlertMessage />', () => {
  test('it should mount', () => {
    render(<AlertMessage />);
    
    const alertMessage = screen.getByTestId('AlertMessage');

    expect(alertMessage).toBeInTheDocument();
  });
});