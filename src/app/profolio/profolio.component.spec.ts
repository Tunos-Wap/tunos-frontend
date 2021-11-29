import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolioComponent } from './profolio.component';

describe('ProfolioComponent', () => {
  let component: ProfolioComponent;
  let fixture: ComponentFixture<ProfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
