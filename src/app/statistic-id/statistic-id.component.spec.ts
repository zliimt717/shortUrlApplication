import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticIdComponent } from './statistic-id.component';

describe('StatisticIdComponent', () => {
  let component: StatisticIdComponent;
  let fixture: ComponentFixture<StatisticIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
