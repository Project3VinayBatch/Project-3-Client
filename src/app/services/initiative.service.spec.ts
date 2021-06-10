import { TestBed } from '@angular/core/testing';

import { InitiativeService } from './initiative.service';

describe('InitiativeService', () => {
  let service: InitiativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitiativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
