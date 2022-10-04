import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageInfoComponent } from './wage-dashboard.component';

describe('WageInfoComponent', () => {
  let component: WageInfoComponent;
  let fixture: ComponentFixture<WageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
