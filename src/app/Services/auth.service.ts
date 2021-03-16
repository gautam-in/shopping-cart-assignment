import { FormGroup } from '@angular/forms';
import { ProductDataService } from './productData.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticatedUser = false;
  registeredUser: any;

  constructor(
    private productDataService: ProductDataService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  setUserDetails(registerForm: FormGroup): void {
    localStorage.setItem('registeredUser', JSON.stringify(registerForm.value));
  }

  getUserDetails(): string {
    return JSON.parse(localStorage.getItem('registeredUser'));
  }

  authenticateUser(loggedInUserEmail: string, loggedInUserPassword: string): void {
    this.registeredUser = this.getUserDetails();
    if (loggedInUserEmail === this.registeredUser.email && loggedInUserPassword === this.registeredUser.password) {
      this.isAuthenticatedUser = true;
      this.updateLoggedInUserDetails(this.isAuthenticatedUser, this.registeredUser.firstName);
    } else if (loggedInUserEmail === 'admin@gmail.com' && loggedInUserPassword === 'admin123') {
      this.isAuthenticatedUser = true;
      this.updateLoggedInUserDetails(this.isAuthenticatedUser, 'Admin');
    } else {
      this.isAuthenticatedUser = false;
      this.openUnauthenticateUserPopup();
      this.updateLoggedInUserDetails(this.isAuthenticatedUser, '');
    }
  }

  openUnauthenticateUserPopup(): void {
    const modalRef = this.modalService.open(AlertComponent, { ariaLabelledBy: 'alertPopup' });
    modalRef.componentInstance.message = 'User does not exist. Please register to login';
  }

  updateLoggedInUserDetails(isLoggedIn: boolean, userName: string): void {
    this.productDataService.isLoggedInSubject.next({ isLoggedIn, userName });
    this.navigateUser(isLoggedIn);
  }

  navigateUser(isLoggedIn: boolean): void {
    isLoggedIn ? this.router.navigate(['/home']) : this.router.navigate(['auth/register']);
  }
}
