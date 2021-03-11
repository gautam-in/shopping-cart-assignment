import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() $categoryData: Observable<any>;
  @Output() $listData = new EventEmitter();
  current = -1;
  index = '0';
  constructor() { }

  ngOnInit(): void {
  }
  listClicked(list, id){
    if(list.enabled && this.current === id){
      this.current = -1;
    }else{
      this.current = id;
    }
    console.log(this.current);
    list.enabled = !list.enabled;
    this.$listData.emit(list);
  }
}
