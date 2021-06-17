import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InitiativeService } from '../services/initiative.service';
import { of } from 'rxjs';
import { User } from '../model/user';

describe('NewInitiativeFormComponent', () => {
  let component: NewInitiativeFormComponent;
  let fixture: ComponentFixture<NewInitiativeFormComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  let dialogMock={close: jasmine.createSpy('close')};

  let initSrvc: InitiativeService;


  let userXray:User={

    "id":101,
    "username":"Xray",
    "role": null,
    "initiatives":null,
    "files":null
  };
  
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
        { provide: Router, useValue: routerSpy },
        {provide: MatDialogRef, useValue: dialogMock},
        //{provide: MatDialog, useValue:{}},
        {provide: MatDialog, useValue: dialogMock},

      ]

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInitiativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    initSrvc=TestBed.inject(InitiativeService);

    component.user=userXray;
    //component.initiativeForm=dummyForm;
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel',()=>{
    component.onCancel();

    expect(dialogMock.close).toHaveBeenCalled();
  });

  it('should submit',()=>{

    let responseTau=userXray;
    let spyTau=spyOn(initSrvc,'getUser').and.returnValue(of(responseTau));
    
    component.onSubmit();
    if(!component.initiativeForm.controls.title.value){ //if null
      expect(routerSpy.navigate).not.toHaveBeenCalledWith();
    }
    else{
    expect(routerSpy.navigate).toHaveBeenCalledWith(['success-initiative']);
    }

  });

  

});
