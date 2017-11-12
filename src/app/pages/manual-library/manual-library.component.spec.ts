import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualLibraryComponent } from './manual-library.component';

describe('ManualLibraryComponent', () => {
  let component: ManualLibraryComponent;
  let fixture: ComponentFixture<ManualLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
