import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() $categoryData: Observable<any>;
  @Output() $listData = new EventEmitter();
  showHide = false;
  constructor() { }

  ngOnInit(): void {
  }
  listClicked(list){
    if (list.target.value === 'all'){
      const obj = {
        enabled: false,
        id: list.target.value
      }
      this.$listData.emit(obj);
    }else{
      const obj = {
        enabled: true,
        id: list.target.value
      }
      this.$listData.emit(obj);
    }
  }
}
