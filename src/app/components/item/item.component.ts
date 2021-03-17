import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ProductModel} from '../../models/product-model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item = {} as ProductModel;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.buttonClick.emit();
  }

}
