import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAwardsComponent } from './manual-awards.component';

describe('ManualAwardsComponent', () => {
  let component: ManualAwardsComponent;
  let fixture: ComponentFixture<ManualAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
