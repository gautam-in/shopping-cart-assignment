import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../Register';


const mockauthenticationSucess = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

describe('Register Form', () => {

    beforeEach(() => {
        render(<Register authenticationSucess={mockauthenticationSucess} />);
      });
    

  it('when_submit_button_is_clicked_without_entering_values_in_fields_expect_validation_errors_is_thrown', async () => {
    const button = screen.getByTestId('submit')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(await screen.findAllByRole('alert')).toHaveLength(5);
    expect(mockauthenticationSucess).not.toBeCalled();
  });

  it('should_throw_first_name_validation_error_when_invalid_first_name_is_entered', async () => {
    fireEvent.input(screen.getByTestId('name1'),{
        target: {
            value: '@#',
          }, 
    })

    fireEvent.input(screen.getByTestId('name2'),{
        target: {
            value: 'kumar',
          }, 
    })

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: {
          value: 'test@gmail.com',
        },
      });

    fireEvent.input(screen.getByTestId('password1'),{
        target: {
            value: 'pass@123',
          }, 
    })

    fireEvent.input(screen.getByTestId('password2'),{
        target: {
            value: 'pass@123',
          }, 
    })
    fireEvent.click(screen.getByTestId('submit'));
    expect(mockauthenticationSucess).not.toBeCalled();
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test@gmail.com');
    expect(screen.getByTestId('password1').value).toBe('pass@123');
    expect(screen.getByTestId('password2').value).toBe('pass@123');
  });

  it('should_throw_email_validation_error_and_password_validation_error_when_invalid_email_and_password_is_entered', async () => {
    fireEvent.input(screen.getByTestId('name1'),{
        target: {
            value: 'dhanush',
          }, 
    })

    fireEvent.input(screen.getByTestId('name2'),{
        target: {
            value: 'kumar',
          }, 
    })

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: {
          value: 'test@',
        },
      });

    fireEvent.input(screen.getByTestId('password1'),{
        target: {
            value: 'pas',
          }, 
    })

    fireEvent.input(screen.getByTestId('password2'),{
        target: {
            value: 'pas',
          }, 
    })

    fireEvent.click(screen.getByTestId('submit'));
    expect(mockauthenticationSucess).not.toBeCalled();
    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test@');
    expect(screen.getByTestId('password1').value).toBe('pas');
  });

  it('should_throw_confirm_password_validation_error_when_same_confirm_password_is_not_entered', async () => {
    fireEvent.input(screen.getByTestId('name1'),{
        target: {
            value: 'dhanush',
          }, 
    })

    fireEvent.input(screen.getByTestId('name2'),{
        target: {
            value: 'kumar',
          }, 
    })

    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
        target: {
          value: 'test@gmail.com',
        },
      });

    fireEvent.input(screen.getByTestId('password1'),{
        target: {
            value: 'pas@123',
          }, 
    })

    fireEvent.input(screen.getByTestId('password2'),{
        target: {
            value: 'pas123',
          }, 
    })

    fireEvent.click(screen.getByTestId('submit'));
    expect(mockauthenticationSucess).not.toBeCalled();
    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(screen.getByTestId('password2').value).toBe('pas123');
  });

//   it('should_submit_the_login_form_when_values_are_entered_correctly', async () => {
//     fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
//         target: {
//           value: 'test@gmail.com',
//         },
//       });
//       fireEvent.input(screen.getByTestId('password'),{
//         target: {
//             value: 'pass@123',
//           }, 
//     })

    // fireEvent.click(screen.getByTestId('submit'));
    // await waitFor(() => expect(screen.findAllByRole('alert')).toHaveLength(0));

    // fireEvent.click(screen.getByTestId('submit'));
    // await waitFor(() => expect(screen.findAllByTestId('alert')).toHaveLength(0));
    // expect(mockauthenticationSucess).toBeCalledWith('test@gmail.com', 'pass@123');
    // expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('');
    // expect(screen.getByTestId('password').value).toBe('');
//   });
});