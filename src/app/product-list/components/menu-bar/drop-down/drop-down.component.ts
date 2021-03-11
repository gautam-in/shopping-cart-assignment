import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {

  @Input() $categoryData: Observable<any>;
  @Output() $listData = new EventEmitter();
  showHide = false;
  constructor(private inMemoryDataService: InMemoryDataService) { }

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
  ngAfterViewChecked(): void {
    if (this.inMemoryDataService.productId){
      const elem =  document.getElementById(this.inMemoryDataService.productId);
      // const all =  document.getElementById('all');
     
      // all.selected = false;
      if(elem){
        // elem.selected = true;
        // elem.setAttribute('selected','selected');
        // all.setAttribute('selected','false');
        const obj = {
          enabled: true,
          id: this.inMemoryDataService.productId
        };
        this.$listData.emit(obj);
      }
     }
    
  }
}
