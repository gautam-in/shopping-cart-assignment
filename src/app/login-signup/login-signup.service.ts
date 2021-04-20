import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class LoginSignUpService {
  public REQUIRED_ERROR: string = 'This field is required';
  public EMAIL_ERROR: string = 'Email is required';
  public EMAIL_MINLENGTH_ERROR: string = 'Minimum 8 characters are required';
  public EMAIL_UNIQUE_ERROR: string =
    'This email is associated with another account';
  public EMAIL_PATTERN: string = ' Email pattern is wrong';

  public PASSWORD_ERROR: string = 'Password is required';
  public PASSWORD_PATTERN: string =
    'Password should have a lower case, upper case, special character and number. ';
  public CONFIRMPASSWORD_ERROR: string =
    'Confirm Password should match to Password';
  public PASSWORD_COMPARE_ERROR: string =
    'Password and Confirm Password must be matched.';
  public PASSWORD_LENGTH_ERROR: string = 'Minimum 8 characters are required';

  public INVALID_ACCOUNT_ERROR: string =
    'This email does not match any account. Please try another email.';

  public SERVER_ERROR: string = 'Something went wrong, please try again';

  public NAME_PATTERN_ERROR: string = 'Name should only contain alphabet';
  public NAME_LENGTH_ERROR: string = 'Name should have minimum 2 char';
  public INVALID_EMAIL_PASSWORD: string = 'Invalid email or password'

  //---------------------
  //---REGEX PATTERN-----
  //---------------------

  public EMAIL_REGEX: string =
    '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'; //eg: a@b.com
  public PASSWORD_REGEX: string =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-])(?=.*[0-9]).+$';
  public NAME_REGEX: string = "^[a-zA-Z]{1}[ *a-zA-Z0-9-'s.]*";

  categories: any = [];

  constructor(private _http: HttpClient) {}

  validateAllFormFields(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.validateAllFormFields(control);
      }
    });
  }

  fetchCategories() {
    this._http.get('server/categories/index.get.json').subscribe((data) => {
      this.categories = data;
      this.categories = this.categories.sort((a:any, b:any) => {
        return a.order - b.order;
      });
      return this.categories;
    });
  }
}
