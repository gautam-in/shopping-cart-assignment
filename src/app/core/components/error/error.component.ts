import { Component, OnInit, ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './../../../shared/services/global-error-handler.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private errorHandler: ErrorHandler, private globalError: GlobalErrorHandler) { }

  ngOnInit() {
    
  }
  

}
