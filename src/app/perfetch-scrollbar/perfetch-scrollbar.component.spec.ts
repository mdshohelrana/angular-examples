import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfetchScrollbarComponent } from './perfetch-scrollbar.component';

describe('PerfetchScrollbarComponent', () => {
  let component: PerfetchScrollbarComponent;
  let fixture: ComponentFixture<PerfetchScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfetchScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfetchScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
