import { TestBed } from '@angular/core/testing';

import { TaskGuardService } from './task-guard.service';

describe('TaskGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskGuardService = TestBed.get(TaskGuardService);
    expect(service).toBeTruthy();
  });
});
