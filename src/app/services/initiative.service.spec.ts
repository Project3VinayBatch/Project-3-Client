import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InitiativeService } from './initiative.service';

describe('InitiativeService', () => {
  let service: InitiativeService;
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
  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [ 
        HttpClientModule
      ],
      providers: [ 
        HttpClientModule
      ]
    });
    service = TestBed.inject(InitiativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get current initiative',()=>{
      let check=service.getCurrentInitiative();
      expect(check).toBeTruthy();
  });

  it('should post file',()=>{
    let username="DeltaC";
      let check=service.postFile(fakeFile,username,3);
      expect(check).toBeTruthy();
  });


});
