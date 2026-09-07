import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation', () => {
  // App uses a HashRouter (no basename); make the route explicit.
  window.location.hash = '#/';
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
