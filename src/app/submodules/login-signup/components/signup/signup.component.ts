import { LiveAnnouncer } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,OnDestroy {

  public form: FormGroup;
  private active: boolean;
  constructor(private formbuilder: FormBuilder, private inMemoryService: InMemoryDataService,
              private route: Router, private announcer: LiveAnnouncer) {
    this.active = true;
    this.form = this.formbuilder.group({
      firstName: ['', [Validators.required,this.noWhitespaceValidator]],
      lastName: ['', [Validators.required,this.noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]]
    });
   }
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.form.valid){
      console.log('inside form data');
      this.inMemoryService.login(this.form.value.email, this.form.value.password).pipe(takeWhile(() => this.active)).subscribe((data) => {
        if(data && data['status'] === '200'){
          this.inMemoryService.userLoggedIn = true;
          this.announcer.announce('Signup successfull navigating to home page');
          this.route.navigateByUrl('/home/homepage');
        }
      },
      err => console.log(err)); 
    } 
  }
  ngOnDestroy(): void {
    this.active = false;
  }
  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
 }
}
