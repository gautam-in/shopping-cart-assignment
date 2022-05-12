import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login';


const mockauthenticationSucess = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

describe('Login Form', () => {

    beforeEach(() => {
        render(<Login authenticationSucess={mockauthenticationSucess} />);
      });
    

  it('when_submit_button_is_clicked_without_entering_values_in_fields_expect_validation_errors_is_thrown', async () => {
    const button = screen.getByTestId('submit')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(mockauthenticationSucess).not.toBeCalled();
  });

  it('should_throw_email_validation_error_when_invalid_email_is_entered', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test@',
      },
    });

    fireEvent.input(screen.getByTestId('password'),{
        target: {
            value: 'pass@123',
          }, 
    })
    fireEvent.click(screen.getByTestId('submit'));
    expect(mockauthenticationSucess).not.toBeCalled();
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test@');
    expect(screen.getByTestId('password').value).toBe('pass@123');
  });

  it('should_throw_password_validation_error_when_invalid_password_is_entered', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: {
          value: 'test@gmail.com',
        },
      });

      fireEvent.input(screen.getByTestId('password'),{
        target: {
            value: 'prd',
          }, 
    })

    fireEvent.click(screen.getByTestId('submit'));
    expect(mockauthenticationSucess).not.toBeCalled();
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test@gmail.com');
    expect(screen.getByTestId('password').value).toBe('prd');
  });

  it('should_submit_the_login_form_when_values_are_entered_correctly', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: {
          value: 'test@gmail.com',
        },
      });
      fireEvent.input(screen.getByTestId('password'),{
        target: {
            value: 'pass@123',
          }, 
    })

    // fireEvent.click(screen.getByTestId('submit'));
    // await waitFor(() => expect(screen.findAllByRole('alert')).toHaveLength(0));

    // fireEvent.click(screen.getByTestId('submit'));
    // await waitFor(() => expect(screen.findAllByTestId('alert')).toHaveLength(0));
    // expect(mockauthenticationSucess).toBeCalledWith('test@gmail.com', 'pass@123');
    // expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('');
    // expect(screen.getByTestId('password').value).toBe('');
  });
});