import React from 'react';
import { render, screen } from '@testing-library/react';
import DecrementSVG from './DecrementSVG';

describe('DecrementSVG Component', () => {
  it('should render the DecrementSVG with the correct ARIA attributes', () => {
    const ariaLabelledby = 'Decrease quantity of something';
    render(<DecrementSVG ariaLabelledby={ariaLabelledby} />);
    
    const svgElement = screen.getByTestId('decrement-SVG');
    
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svgElement).toHaveAttribute('width', '42');
    expect(svgElement).toHaveAttribute('height', '42');
    expect(svgElement).toHaveAttribute('aria-hidden', 'true');
    expect(svgElement).toHaveAttribute('aria-labelledby', ariaLabelledby);
  });
});
