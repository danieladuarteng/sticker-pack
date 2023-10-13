import React from 'react';
import { render, screen } from '@testing-library/react';
import IncrementSVG from './IncrementSVG';

describe('IncrementSVG', () => {
  it('should render the IncrementSVG with the correct ARIA attributes', () => {
    const ariaLabelledby = 'Increase quantity of something';

    render(<IncrementSVG ariaLabelledby={ariaLabelledby} />);

    const svgElement = screen.getByTestId('increment-SVG');

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');
    expect(svgElement).toHaveAttribute('aria-hidden', 'true');
    expect(svgElement).toHaveAttribute('aria-labelledby', ariaLabelledby);
  });
});
