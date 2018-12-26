import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlSelectedTextComponent } from './ddl-selected-text.component';

describe('DdlSelectedTextComponent', () => {
  let component: DdlSelectedTextComponent;
  let fixture: ComponentFixture<DdlSelectedTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdlSelectedTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdlSelectedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
