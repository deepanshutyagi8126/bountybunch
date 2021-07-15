import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementListingComponent } from './advertisement-listing.component';

describe('AdvertisementListingComponent', () => {
  let component: AdvertisementListingComponent;
  let fixture: ComponentFixture<AdvertisementListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
