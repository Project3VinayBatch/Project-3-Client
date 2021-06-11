import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SpecificService } from './specific.service';

describe('SpecificService', () => {
  let service: SpecificService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ]

    });
    service = TestBed.inject(SpecificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
