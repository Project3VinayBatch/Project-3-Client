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
import { Router } from '@angular/router';


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
        RouterTestingModule
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

  it('should logout', () => {
    const fixture = TestBed.createComponent(NavBarComponent);

    const btn = fixture.debugElement.nativeElement.querySelector('#logout-btn');
    expect(btn.routerLink).toEqual(!'/new-initiative')
  });

  it('should login', () => {
    const fixture = TestBed.createComponent(NavBarComponent);

    const btn = fixture.debugElement.nativeElement.querySelector('#login-btn');
    //expect(btn.routerLink).toEqual("/sign-in")
    const router = TestBed.inject(Router); //Get the router from the TestBed.
    // @ts-ignore: force this private property value for testing.
    router.url='/sign-in';

    const spy = spyOn(router, 'navigate'); //Register a Spy on the router navigate function
    expect(spy).toHaveBeenCalledWith(['/sign-in']); //Check if the router has been called with 'login'
  

  });

});
