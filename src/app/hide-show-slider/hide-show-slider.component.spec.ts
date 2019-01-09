import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowSliderComponent } from './hide-show-slider.component';

describe('HideShowSliderComponent', () => {
  let component: HideShowSliderComponent;
  let fixture: ComponentFixture<HideShowSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideShowSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideShowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
