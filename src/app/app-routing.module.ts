import { CreatePatientComponent } from './create-patient/create-patient.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientControlPanelComponent } from './patient-control-panel/patient-control-panel.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientChoicesComponent } from './patients_choices/patients_choices.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DoctorsChoicesComponent } from './doctors-choices/doctors-choices.component';
import { AdminChoicesComponent } from './admin-choices/admin-choices.component';
import { PatientsListComponent } from './patients-list/patients-list.component';


const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'patient' , component: PatientControlPanelComponent },
  { path: 'doctor' , component: DoctorsChoicesComponent},
  { path: 'createPatient', component: CreatePatientComponent},
  { path: 'createDoctor', component: CreateDoctorComponent},
  { path: 'patients_choices' , component: PatientChoicesComponent},
  { path: 'view_patient', component: ViewPatientComponent},
  { path: 'doctors-choices' , component: DoctorsChoicesComponent},
  { path: 'admin-choices' , component: AdminChoicesComponent},
  { path: 'patient-control-panel' , component: PatientControlPanelComponent},
  { path: 'patients-list' , component: PatientsListComponent},
  { path: '' , component: HomeComponent }
  // { path: '**' , component: PatientControlPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

