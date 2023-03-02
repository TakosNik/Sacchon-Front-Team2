import { MeasurementsComponent } from './view-measurements/view-measurements.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientControlPanelComponent } from './patient-control-panel/patient-control-panel.component';
import { DoctorComponent } from './doctor/doctor.component';
import { UserComponent } from './user/user.component';
import { PatientChoicesComponent } from './patients_choices/patients_choices.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { RemovePatientComponent } from './remove-patient/remove-patient.component';
import { DoctorsChoicesComponent } from './doctors-choices/doctors-choices.component';
import { AdminChoicesComponent } from './admin-choices/admin-choices.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { UpdatePatientComponent } from './update-patient-info/update-patient-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreatePatientComponent,
    PatientControlPanelComponent,
    DoctorComponent,
    UserComponent,
    PatientChoicesComponent,
    CreateDoctorComponent,
    ViewPatientComponent,
    RemovePatientComponent,
    DoctorsChoicesComponent,
    AdminChoicesComponent,
    PatientsListComponent,
    UpdatePatientComponent,
    MeasurementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export default class AppModule { }
