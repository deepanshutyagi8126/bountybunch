import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementRequestComponent } from './advertisement-request.component';

describe('AdvertisementRequestComponent', () => {
  let component: AdvertisementRequestComponent;
  let fixture: ComponentFixture<AdvertisementRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertisementRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
