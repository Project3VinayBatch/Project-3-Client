import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { pathToFileURL } from 'url';

import { FileComponent } from './file.component';

describe('FileComponent', () => {
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;
  //let fakeUpload:any;
  //let fakeUpload:FileList;
  let fileSpy={fileList:jasmine.createSpy('fileList')};
  let fakeFile:File;
  fakeFile=
  
  {
    "name":"test.exe",
    "lastModified":3,
    "size":3,
    "type":"exe",
    "arrayBuffer":null,
    "slice":null,
    "stream":null,
    "text":null
  };
  let fakeUpload={
    length:2,
    item:(index: 0)=>fakeFile,
  };
  let fakeUploadNull={
    length:0,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileComponent ],
      providers: [ 

        {provide: FileList, useValue: fileSpy}

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should upload',()=>{
    
    
    //let input=fixture.debugElement.query(By.css('input[type=file]')).nativeElement;
    //input.dispatchEvent(new Event('input'));

    let d={target:{files:fakeUpload}};
    let e={target:{files:fakeUploadNull}};
    //let c=fixture.detectChanges();
    let spyTau=spyOn(component,"fileUpload").and.callThrough();
    component.ngOnInit();

    component.fileUpload(d);
    component.fileUpload(e);

    //spyTau.call;
    expect(spyTau).toHaveBeenCalledWith(d);
    expect(spyTau).toHaveBeenCalledWith(e);

    //expect(fileSpy.fileList).toBe(fakeUpload);
  });
});
