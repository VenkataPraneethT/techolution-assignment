import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAdmissionFormComponent } from './school-admission-form.component';

describe('SchoolAdmissionFormComponent', () => {
  let component: SchoolAdmissionFormComponent;
  let fixture: ComponentFixture<SchoolAdmissionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAdmissionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
