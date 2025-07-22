import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCore } from './chart-core';

describe('ChartCore', () => {
  let component: ChartCore;
  let fixture: ComponentFixture<ChartCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartCore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartCore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
