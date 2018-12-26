import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAllTextComponent } from './select-all-text.component';

describe('SelectAllTextComponent', () => {
  let component: SelectAllTextComponent;
  let fixture: ComponentFixture<SelectAllTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAllTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAllTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
