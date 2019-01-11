import { TestBed } from '@angular/core/testing';

import { TranslateAppService } from './translate-app.service';

describe('TranslateAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateAppService = TestBed.get(TranslateAppService);
    expect(service).toBeTruthy();
  });
});
