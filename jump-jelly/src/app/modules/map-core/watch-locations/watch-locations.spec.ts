import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLocations } from './watch-locations';

describe('WatchLocations', () => {
  let component: WatchLocations;
  let fixture: ComponentFixture<WatchLocations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchLocations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchLocations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
