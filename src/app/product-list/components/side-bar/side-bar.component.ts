import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { InMemoryDataService } from 'src/app/services/in-memory-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnChanges {

  @Input() categoryData: any[];
  @Output() $listData = new EventEmitter();
  current = -1;
  index = '0';
  filterCategoryData: any[];
  constructor(private inMemoryDataService: InMemoryDataService) { }


  ngOnInit(): void {
    if ((this.categoryData !== undefined && this.categoryData.length > 0 && this.inMemoryDataService.productId) ){
      for (const [index , item] of this.categoryData.entries()){
        if (item.id === this.inMemoryDataService.productId){
          item.enabled = !item.enabled;
          this.current = index;
          const obj = {
            enabled: true,
            id: this.inMemoryDataService.productId
          };
          this.$listData.emit(obj);
          break;
        }
      }
    }
  }
  ngOnChanges(): void {

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
}
