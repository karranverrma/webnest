import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders Rotar landing page hero', () => {
  render(<App />);
  const ctaFrame = screen.getByAltText(/take control of your productivity/i);
  expect(ctaFrame).toBeInTheDocument();
});

test('demo form fields accept user details', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'Priya Sharma' },
  });
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'priya@example.com' },
  });
  fireEvent.change(screen.getByLabelText('Phone number'), {
    target: { value: '9876543210' },
  });
  fireEvent.change(screen.getByLabelText('Service'), {
    target: { value: 'Marketing' },
  });

  expect(screen.getByLabelText('Name')).toHaveValue('Priya Sharma');
  expect(screen.getByLabelText('Email')).toHaveValue('priya@example.com');
  expect(screen.getByLabelText('Phone number')).toHaveValue('9876543210');
  expect(screen.getByLabelText('Service')).toHaveValue('Marketing');
});

test('demo form responds on submit without navigation', () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'Priya Sharma' },
  });
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'priya@example.com' },
  });
  fireEvent.change(screen.getByLabelText('Phone number'), {
    target: { value: '9876543210' },
  });
  fireEvent.change(screen.getByLabelText('Service'), {
    target: { value: 'Marketing' },
  });
  fireEvent.click(screen.getByLabelText('Submit demo request'));

  expect(screen.getByRole('status')).toHaveTextContent(
    'Thanks Priya Sharma. We received your request.'
  );
});
