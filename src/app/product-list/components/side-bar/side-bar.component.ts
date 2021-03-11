import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, AfterViewChecked {

  @Input() $categoryData: Observable<any>;
  @Output() $listData = new EventEmitter();
  current = -1;
  index = '0';
  constructor(private inMemoryDataService: InMemoryDataService) { }
 

  ngOnInit(): void {
  
  }
  listClicked(list, id){
    if (list.enabled && this.current === id){
      this.current = -1;
    }else{
      this.current = id;
    }
    console.log(this.current);
    list.enabled = !list.enabled;
    this.$listData.emit(list);
  }
  ngAfterViewChecked()
  {
    if (this.inMemoryDataService.productId){
      const elem =  document.getElementById(this.inMemoryDataService.productId);
      if(elem){
        const obj = {
          enabled: true,
          id: this.inMemoryDataService.productId
        };
        this.$listData.emit(obj);
      }
     }
  }
}
