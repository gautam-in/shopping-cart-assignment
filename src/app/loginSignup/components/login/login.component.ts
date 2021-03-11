import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  private active: boolean;
  constructor(private formbuilder: FormBuilder, private inMemoryService: InMemoryDataService, private route: Router) {
    this.active = true;
    this.form = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]]
    });
   }
  ngOnInit(): void {
  }
  onSubmit(){
    if (this.form.valid){
      console.log('inside form data');
      // tslint:disable-next-line: deprecation
      this.inMemoryService.login().pipe(takeWhile(() => this.active)).subscribe((data) => {
        // tslint:disable-next-line: no-string-literal
        if (data && data['status'] === '200'){
          this.inMemoryService.userLoggedIn = true;
          this.route.navigateByUrl('/home/homepage');
        }
      },
      err => console.log(err));
    }
  }
  ngOnDestroy(): void {
    this.active = false;
  }
}
