export class ErrorMsg {
  public static REQUIRED_ERROR: string = 'This field is required';
  public static EMAIL_ERROR: string = 'Email is required';
  public static EMAIL_MINLENGTH_ERROR: string =
    'Minimum 8 characters are required';
  public static EMAIL_UNIQUE_ERROR: string =
    'This email is associated with another account';
  public static EMAIL_PATTERN: string = ' Email pattern is wrong';

  public static PASSWORD_ERROR: string = 'Password is required';
  public static PASSWORD_PATTERN: string =
    'Password should have a lower case, upper case, special character and number. ';
  public static CONFIRMPASSWORD_ERROR: string =
    'Confirm Password should match to Password';
  public static PASSWORD_COMPARE_ERROR: string =
    'Password and Confirm Password must be matched.';
  public static PASSWORD_LENGTH_ERROR: string =
    'Minimum 8 characters are required';

  public static INVALID_ACCOUNT_ERROR: string =
    'This email does not match any account. Please try another email.';

  public static SERVER_ERROR: string = 'Something went wrong, please try again';

  public static NAME_PATTERN_ERROR: string =
    'Name should only contain alphabet';
  public static NAME_LENGTH_ERROR: string = 'Name should have minimum 2 char';
  public static INVALID_EMAIL_PASSWORD: string = 'Invalid email or password';
  public static EMAIL_EXISTS = 'This email exists already';
  public static EMAIL_NOT_FOUND = 'This email does not exist.';
  public static INVALID_PASSWORD = 'This password is not correct.';

  public static LOG_OUT = 'You have successfully logged out';
  public static UNKNOWN_ERROR = 'An unknown error occurred!';
  public static ORDER_PLACED = 'Your Order Has been Placed Successfully';
}
