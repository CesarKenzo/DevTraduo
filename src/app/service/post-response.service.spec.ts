import { TestBed } from '@angular/core/testing';

import { PostResponseService } from './post-response.service';

describe('PostResponseService', () => {
  let service: PostResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
