import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InitiativeGuard } from './initiative.guard';

describe('InitiativeGuard', () => {
  let guard: InitiativeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientModule
      ],
      providers: [ 
        HttpClientModule
      ]
    });
    guard = TestBed.inject(InitiativeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
