import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChildFormComponent } from './master-child-form.component';

describe('MasterChildFormComponent', () => {
  let component: MasterChildFormComponent;
  let fixture: ComponentFixture<MasterChildFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterChildFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterChildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
