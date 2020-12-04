import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsServiceComponent } from './workouts-service.component';

describe('WorkoutsServiceComponent', () => {
  let component: WorkoutsServiceComponent;
  let fixture: ComponentFixture<WorkoutsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
