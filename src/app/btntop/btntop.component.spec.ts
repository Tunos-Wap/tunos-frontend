import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtntopComponent } from './btntop.component';

describe('BtntopComponent', () => {
  let component: BtntopComponent;
  let fixture: ComponentFixture<BtntopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtntopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtntopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
