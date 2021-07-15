import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementListing1Component } from './advertisement-listing1.component';

describe('AdvertisementListing1Component', () => {
  let component: AdvertisementListing1Component;
  let fixture: ComponentFixture<AdvertisementListing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementListing1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementListing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
