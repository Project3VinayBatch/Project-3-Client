import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { UserGuardGuard } from './user-guard.guard';

describe('UserGuardGuard', () => {
  let guard: UserGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(UserGuardGuard);
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
