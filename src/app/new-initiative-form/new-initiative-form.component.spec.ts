import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { NewInitiativeFormComponent } from './new-initiative-form.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewInitiativeFormComponent', () => {
  let component: NewInitiativeFormComponent;
  let fixture: ComponentFixture<NewInitiativeFormComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInitiativeFormComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ 
        HttpClientModule,
        RouterTestingModule,
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInitiativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel',()=>{
    component.clickCancel();

    expect(routerSpy.navigate).toHaveBeenCalledWith(['all-initiative']);
  });

  it('should submit',()=>{
    component.clickSubmit();
    if(!component.initiativeForm.controls.title.value){ //if null
      expect(routerSpy.navigate).not.toHaveBeenCalledWith();
    }
    else{
    expect(routerSpy.navigate).toHaveBeenCalledWith(['success-initiative']);
    }

  });

});
