import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Drawer from './Drawer';

describe('<Drawer />', () => {
  test('it should mount', () => {
    render(<Drawer />);
    
    const drawer = screen.getByTestId('Drawer');

    expect(drawer).toBeInTheDocument();
  });
});