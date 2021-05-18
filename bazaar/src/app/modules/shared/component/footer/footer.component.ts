import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../service/share.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showFooter : boolean= true
  fiscalyear : string;
  constructor(private _shareService : ShareService) { }

  ngOnInit(): void {
    this._shareService.getfooterStatus().subscribe(res => {
        this.showFooter = res
    })
    this.getCurrentFinancialYear()
  }
   getCurrentFinancialYear() {
    const today = new Date();
    if ((today.getMonth() + 1) <= 3) {
      this.fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()
    } else {
      this.fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
    }
    
  }

}
