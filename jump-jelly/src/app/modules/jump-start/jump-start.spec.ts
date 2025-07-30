import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpStart } from './jump-start';

describe('JumpStart', () => {
  let component: JumpStart;
  let fixture: ComponentFixture<JumpStart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JumpStart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JumpStart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
