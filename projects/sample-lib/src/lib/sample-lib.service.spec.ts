import { TestBed } from '@angular/core/testing';

import { SampleLibService } from './sample-lib.service';

describe('SampleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleLibService = TestBed.get(SampleLibService);
    expect(service).toBeTruthy();
  });
});
