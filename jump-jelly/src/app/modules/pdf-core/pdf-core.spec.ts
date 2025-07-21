import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCore } from './pdf-core';

describe('PdfCore', () => {
  let component: PdfCore;
  let fixture: ComponentFixture<PdfCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfCore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfCore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
