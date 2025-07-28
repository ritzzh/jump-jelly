import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractFiles } from './extract-files';

describe('ExtractFiles', () => {
  let component: ExtractFiles;
  let fixture: ComponentFixture<ExtractFiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtractFiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtractFiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
