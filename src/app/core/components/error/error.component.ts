import { Component, OnInit, ErrorHandler } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private errorHandler: ErrorHandler) { }

  ngOnInit() {
  
  }

}
