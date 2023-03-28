import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapTopNavbarComponent } from './sitemap-top-navbar.component';

describe('SitemapTopNavbarComponent', () => {
  let component: SitemapTopNavbarComponent;
  let fixture: ComponentFixture<SitemapTopNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitemapTopNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitemapTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
