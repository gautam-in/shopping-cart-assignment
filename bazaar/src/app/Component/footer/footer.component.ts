import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from 'src/app/service/share-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showFooter : boolean= true
  constructor(private _shareService : ShareServiceService) { }

  ngOnInit(): void {
    this._shareService.getfooterStatus().subscribe(res => {
        this.showFooter = res
    })
  }

}
