import { TestBed } from '@angular/core/testing';

import { ProfileViewModelService } from './profile-view-model.service';

describe('ProfileViewModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileViewModelService = TestBed.get(ProfileViewModelService);
    expect(service).toBeTruthy();
  });
});
