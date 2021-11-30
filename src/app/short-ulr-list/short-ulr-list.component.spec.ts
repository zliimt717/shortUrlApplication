import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUlrListComponent } from './short-ulr-list.component';

describe('ShortUlrListComponent', () => {
  let component: ShortUlrListComponent;
  let fixture: ComponentFixture<ShortUlrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortUlrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUlrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
