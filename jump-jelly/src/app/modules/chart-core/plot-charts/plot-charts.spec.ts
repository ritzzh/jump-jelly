import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotCharts } from './plot-charts';

describe('PlotCharts', () => {
  let component: PlotCharts;
  let fixture: ComponentFixture<PlotCharts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotCharts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotCharts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
