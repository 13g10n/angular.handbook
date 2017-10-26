import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDetailsComponent } from './manual-details.component';

describe('ManualDetailsComponent', () => {
  let component: ManualDetailsComponent;
  let fixture: ComponentFixture<ManualDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
