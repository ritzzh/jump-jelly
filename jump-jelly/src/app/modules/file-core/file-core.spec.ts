import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCore } from './file-core';

describe('FileCore', () => {
  let component: FileCore;
  let fixture: ComponentFixture<FileCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileCore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileCore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
