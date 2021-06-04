import { Component, Input } from '@angular/core';
import { ICategory } from 'src//app/shared/models/category.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent {
  @Input() categories!: ICategory[];
}
