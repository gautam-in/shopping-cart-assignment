
export class AppConstants {
public static REQUIRED_ERROR: string = 'This field is required';
  public static EMAIL_ERROR: string = 'Email is required';
  public static EMAIL_MINLENGTH_ERROR: string = 'Minimum 8 characters are required';
  public static EMAIL_UNIQUE_ERROR: string =
    'This email is associated with another account';
  public static EMAIL_PATTERN: string = ' Email pattern is wrong';

  public static PASSWORD_ERROR: string = 'Password is required';
  public static PASSWORD_PATTERN: string =
    'Password should have a lower case, upper case, special character and number. ';
  public static CONFIRMPASSWORD_ERROR: string =
    'Confirm Password should match to Password';
  public static PASSWORD_COMPARE_ERROR: string =
    'Password and Confirm Password must be match.';
  public static PASSWORD_LENGTH_ERROR: string = 'Minimum 8 characters are required';
  public static PASSWORD_MATCH_ERROR: string = 'Password does not match';

  public static INVALID_ACCOUNT_ERROR: string =
    'This email does not match any account. Please try another email.';
  public static USER_EXIST_ERROR: string =
    'This email has already been registered with other user';

  public static SERVER_ERROR: string = 'Something went wrong, please try again';

  public static NAME_PATTERN_ERROR: string = 'Name should only contain alphabet';
  public static NAME_LENGTH_ERROR: string = 'Name should have minimum 2 char';

  //---------------------
  //---REGEX PATTERN-----
  //---------------------

  public static EMAIL_REGEX: string =
    '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'; //eg: a@b.com
  public static PASSWORD_REGEX: string =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])(?=.*[0-9]).+$';
  public static NAME_REGEX: string = "^[a-zA-Z]{1}[ *a-zA-Z0-9-'s.]*";


  
}