import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit, OnChanges {

  @Input() categoryData: any[];
  @Output() $listData = new EventEmitter();
  showHide = false;
  selectedId: string;
  constructor(private inMemoryDataService: InMemoryDataService) {

   }

  ngOnInit(): void {
    if (this.inMemoryDataService.productId){
      this.selectedId = this.inMemoryDataService.productId;
      const obj = {
        enabled: true,
        id: this.inMemoryDataService.productId
      };
      this.$listData.emit(obj);
   }
   else{
    this.selectedId = 'all';
   }
  }
  ngOnChanges(): void {

  }
  listClicked(list){
    if (list.target.value === 'all'){
      const obj = {
        enabled: false,
        id: list.target.value
      };
      this.$listData.emit(obj);
    }else{
      const obj = {
        enabled: true,
        id: list.target.value
      };
      this.$listData.emit(obj);
    }
  }
}
