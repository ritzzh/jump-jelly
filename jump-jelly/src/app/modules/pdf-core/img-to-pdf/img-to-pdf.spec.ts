import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgToPdf } from './img-to-pdf';

describe('ImgToPdf', () => {
  let component: ImgToPdf;
  let fixture: ComponentFixture<ImgToPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgToPdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgToPdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
