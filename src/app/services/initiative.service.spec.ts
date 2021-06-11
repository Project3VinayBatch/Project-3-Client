import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InitiativeService } from './initiative.service';

describe('InitiativeService', () => {
  let service: InitiativeService;

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
});
