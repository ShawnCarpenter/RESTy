import React from 'react';
import { render, screen } from '@testing-library/react';
import Resty from './Resty';

describe('Resty tests', () => {
  it('renders a controls box on screen', () => {
    
    render(<Resty />);
    const urlInput = screen.getByLabelText('URL')
    
  });
  
});
