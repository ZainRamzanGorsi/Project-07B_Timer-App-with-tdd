import React from 'react';
import { render } from '@testing-library/react';
import App from './App';



test('renders main heading', () => {
  const renderObj = render(<App />);
  const linkElement = renderObj.getByText(/Timer App/i);

  expect(linkElement).toBeInTheDocument();
});

