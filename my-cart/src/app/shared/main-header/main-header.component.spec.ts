import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { RouterLinkStubDirective } from 'src/app/testing/routerLink-stub.directive';

import { MainHeaderComponent } from './main-header.component';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;
  let routerLinkDirectiveList : Array<RouterLinkStubDirective>;
  let debugDirectiveList : Array<DebugElement>
  let componentTemplate : DebugElement;

  function getDebugElementList(){
    debugDirectiveList = componentTemplate.queryAll(By.directive(RouterLinkStubDirective));
    routerLinkDirectiveList = debugDirectiveList.map(de=> de.injector.get(RouterLinkStubDirective))
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHeaderComponent,RouterLinkStubDirective ],
      providers : [{provide :Store , useValue : null},]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    componentTemplate = fixture.debugElement
    fixture.detectChanges();
  });

  beforeEach(()=>{
    getDebugElementList()
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Templete should contain 2 route links when user logged in', () => {
    component.user.idToken = '100'; // Logged in
    expect(routerLinkDirectiveList.length).toBe(2);
  });

  it('Templete should contain 2 route links when user not logged in', () => {
     // not Logged in
    expect(routerLinkDirectiveList.length).toBe(2);
  });

  it('Route links should be in order when user logged in', () => {
    // user logged in
    component.user.idToken = '100';
    fixture.detectChanges();
    getDebugElementList()
    expect(routerLinkDirectiveList[0].routingPath).toBe('home');
    expect(routerLinkDirectiveList[1].routingPath).toBe('products');
  });

  it('Route links should be in order when user logged in', () => {
    // user not logged in
    
    expect(routerLinkDirectiveList[0].routingPath).toBe('login');
    expect(routerLinkDirectiveList[1].routingPath).toBe('login');
  });

  it('Should route on click',fakeAsync(() =>{
     component.user.idToken = '100'; // Logged in
     fixture.detectChanges();
     getDebugElementList();     
     const homeLinkNativeElement = debugDirectiveList[0]
     const homeLinkRouterDirective = routerLinkDirectiveList[0];
     expect(homeLinkRouterDirective.navigatedTo).toBeUndefined('Should not have navigated yet'); 
     homeLinkNativeElement.triggerEventHandler('click',null);
     fixture.detectChanges();
     expect(homeLinkRouterDirective.navigatedTo).toBe('home','Navigated successfully');
  }))

});
