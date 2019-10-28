import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrackListingComponent } from './product-track-listing.component';

describe('ProductTrackListingComponent', () => {
  let component: ProductTrackListingComponent;
  let fixture: ComponentFixture<ProductTrackListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTrackListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTrackListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
