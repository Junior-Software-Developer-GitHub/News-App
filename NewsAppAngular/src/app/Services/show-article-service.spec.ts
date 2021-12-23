import { TestBed } from '@angular/core/testing';

import { ShowArticleService } from './show-article-service';

describe('ShowArticleServiceService', () => {
  let service: ShowArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
