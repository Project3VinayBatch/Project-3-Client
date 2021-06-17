import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule,
        HttpClientModule

      ],
      providers: [ 
        HttpClientModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should route to elsewhere after logout', () => {
    const fixture = TestBed.createComponent(NavBarComponent);

    const btn = fixture.debugElement.nativeElement.querySelector('#logout-btn').getAttribute('routerlink');
    expect(btn).toEqual('/sign-in')
    //change to whatever the logout route will be
  });

  it('should logout',()=>{
    
    component.logout();
    expect(sessionStorage.getItem('token')).toBeFalsy;
  });


  it('should route to sign-in', () => {
    const fixture = TestBed.createComponent(NavBarComponent);

    const btn = fixture.debugElement.nativeElement.querySelector('#login-btn').getAttribute('routerlink');
    expect(btn).toEqual('/sign-in')
  });
  
  it('should route to all initiative', () => {
    const fixture = TestBed.createComponent(NavBarComponent);

    const btn = fixture.debugElement.nativeElement.querySelector('#all-initiatives').getAttribute('routerlink');
    expect(btn).toEqual('/all-initiative')
  });

  it('should on change',()=>{

    component.ngOnChanges();
  });
  

});
