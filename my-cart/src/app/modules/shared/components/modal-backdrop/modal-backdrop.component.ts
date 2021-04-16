import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-backdrop',
  templateUrl: './modal-backdrop.component.html',
  styleUrls: ['./modal-backdrop.component.scss']
})
export class ModalBackdropComponent implements OnInit,AfterViewInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    document.querySelector('.modal-backdrop')?.addEventListener('click',this.closeModat)
  }

  closeModat(event:any){
     if(event.target.classList.contains('modal-backdrop')){
      (<HTMLElement>document.querySelector('.modal-backdrop')).style.display = 'none';
     }
  }

}
