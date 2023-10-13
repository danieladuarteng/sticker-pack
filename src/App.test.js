import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('should generate a snapshot of the component structure without state', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
