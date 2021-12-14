import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAlterComponent } from './task-alter.component';

describe('TaskAlterComponent', () => {
  let component: TaskAlterComponent;
  let fixture: ComponentFixture<TaskAlterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAlterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
