import ExampleC from './Example';
import { render, fireEvent, waitFor, screen, getByText } from '@testing-library/react';

test('loads and displays greeting', () => {
  render(<ExampleC />);
  expect(screen.getByText('Hello world')).toBeInTheDocument();
});
