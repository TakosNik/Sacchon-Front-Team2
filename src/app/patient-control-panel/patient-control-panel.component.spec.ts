import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientControlPanelComponent } from './patient-control-panel.component';

describe('PatientControlPanelComponent', () => {
  let component: PatientControlPanelComponent;
  let fixture: ComponentFixture<PatientControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientControlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
