import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyNavbarComponent } from './privacy-navbar.component';

describe('PrivacyNavbarComponent', () => {
  let component: PrivacyNavbarComponent;
  let fixture: ComponentFixture<PrivacyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
