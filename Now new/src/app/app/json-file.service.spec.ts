import { TestBed } from '@angular/core/testing';

import { JsonFileService } from './json-file.service';

describe('JsonFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonFileService = TestBed.get(JsonFileService);
    expect(service).toBeTruthy();
  });
});
