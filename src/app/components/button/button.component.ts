import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() content = '';
  @Input() type = '';
  @Input() mobileContent = '';
  @Input() isFullWidth = false;
  @Input() disabled = false;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.buttonClick.emit();
  }

  login() {

  }

}
