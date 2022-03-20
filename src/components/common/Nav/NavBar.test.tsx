import { render, screen } from '@testing-library/react';

import NavBar from ".";

test('Should render app nav', () => {
  render(<NavBar />);
  const linkElement = screen.getByText(/My Apps/i);
  expect(linkElement).toBeInTheDocument();
});