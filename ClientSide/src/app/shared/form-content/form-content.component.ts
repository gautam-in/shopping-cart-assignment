import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormContentComponent implements OnInit {
  @Input() heading: string;
  @Input() subText: string;

  constructor() {}

  ngOnInit(): void {}
}
