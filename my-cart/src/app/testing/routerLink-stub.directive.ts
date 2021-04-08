import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector : '[routerLink]'
})

export class RouterLinkStubDirective{
    routingPath!: string;
    navigatedTo!: string;
    constructor(){

    }
    @Input() set routerLink(routerLink:string){
        this.routingPath = routerLink
    }

    @HostListener('click') navigateTo(){
        this.navigatedTo = this.routingPath
    }
}