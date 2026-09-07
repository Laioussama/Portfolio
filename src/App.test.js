import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation', () => {
  // App mounts <HashRouter basename="/Portfolio">, so the hash must start with
  // the basename for the router to render anything under jsdom.
  window.location.hash = '#/Portfolio/';
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
