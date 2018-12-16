import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnOffCheckboxComponent } from './on-off-checkbox.component';

describe('OnOffCheckboxComponent', () => {
  let component: OnOffCheckboxComponent;
  let fixture: ComponentFixture<OnOffCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnOffCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnOffCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
