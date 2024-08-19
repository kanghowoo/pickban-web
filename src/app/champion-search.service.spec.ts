import { TestBed } from '@angular/core/testing';

import { ChampionSearchService } from './champion-search.service';

describe('ChampionSearchService', () => {
  let service: ChampionSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
