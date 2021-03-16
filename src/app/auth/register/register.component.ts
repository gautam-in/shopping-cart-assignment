import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isAlertDisplayed = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.matchPassword });
  }

  onRegister(): void {
    this.authService.setUserDetails(this.registerForm);
    this.openRegisteredUserPopup();
    this.router.navigate(['auth/signin']);
  }

  openRegisteredUserPopup(): void {
    const modalRef = this.modalService.open(AlertComponent, { ariaLabelledBy: 'alertPopup' });
    modalRef.componentInstance.message = 'User successfully Registered. Please login';
  }

  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
      return null;
    }
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { mismatch: true };
    } else {
      return null;
    }
  }

}
