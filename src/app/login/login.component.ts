import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
}

// ValidatationMessages = {
//   "email": {
//     "required": "Email is required",
//     "isValidEmail":"Please enter a valid email id"
//   },
//   "password": {
//     "required": "Password is required",
//     "minlength": "Password must be atleast 6 characters long.",
//     "numberAlphabet":"Password must have number and alphabet",
//     "canNotHaveSpace":"Password can not have space."
//   }
// };

// formErrors = {
//   email: '',
//   password:''
// };

// loginForm = this.fb.group({
//   email:['',Validators.required],
//   password:['',Validators.required]
// });
// constructor(private fb:FormBuilder){}
// onSubmit(){
//   console.warn(this.loginForm.status)
// }
