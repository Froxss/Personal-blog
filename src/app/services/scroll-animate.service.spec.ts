import { TestBed } from '@angular/core/testing';

import { ScrollAnimateService } from './scroll-animate.service';

describe('ScrollAnimateService', () => {
  let service: ScrollAnimateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollAnimateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
