import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  passwordMatch = false;
  userDetails: any;
  userExist = false;

 constructor(private formBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
  }, {validator: this.passwordMatchValidator.bind(this)});
}

   ngOnInit(): void {
    const itemsStr = localStorage.getItem('RegisteredUsers');
    this.userDetails = itemsStr ? JSON.parse(itemsStr) : [];
  }

 // convenience getter for easy access to form fields
   get f(): any { return this.registerForm.controls; }

   onSubmit(): void {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
    } else if (this.registerForm.valid){
      const data = JSON.stringify(this.registerForm.value);
      const RegisterData = JSON.parse(data);
      for ( let i = 0; i < this.userDetails.length; i++ ) {
        const userData = JSON.parse(this.userDetails[i]);
        if ( RegisterData.userEmail === userData.userEmail ) {
          this.userExist = true;
          break;
        }else {
          this.userExist = false;
        }
      }
      if ( !this.userExist ) {
      this.userDetails.push(data);
      localStorage.setItem('RegisteredUsers', JSON.stringify(this.userDetails));
      alert('Registration is successfull.');
      this.router.navigate(['./signIn']);
      }
    } else {
      alert('something went wrong. Please try again.');
    }
   }

   passwordMatchValidator(frm: FormGroup): any {
    return frm.controls.password.value === frm.controls.confirmPassword.value ? null : {mismatch: true};
   }

}
