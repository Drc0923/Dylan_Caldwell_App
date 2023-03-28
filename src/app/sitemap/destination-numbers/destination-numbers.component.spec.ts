import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationNumbersComponent } from './destination-numbers.component';

describe('DestinationNumbersComponent', () => {
  let component: DestinationNumbersComponent;
  let fixture: ComponentFixture<DestinationNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
