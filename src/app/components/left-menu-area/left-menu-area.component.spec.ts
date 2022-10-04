import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMenuAreaComponent } from './left-menu-area.component';

describe('LeftMenuAreaComponent', () => {
  let component: LeftMenuAreaComponent;
  let fixture: ComponentFixture<LeftMenuAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftMenuAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMenuAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
