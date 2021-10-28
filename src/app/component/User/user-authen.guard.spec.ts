import { TestBed } from '@angular/core/testing';

import { UserAuthenGuard } from './user-authen.guard';

describe('UserAuthenGuard', () => {
  let guard: UserAuthenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
