import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPriceComponentComponent } from './total-price-component.component';

describe('TotalPriceComponentComponent', () => {
  let component: TotalPriceComponentComponent;
  let fixture: ComponentFixture<TotalPriceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPriceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPriceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
