import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientControlPanelComponent } from './patient-control-panel/patient-control-panel.component';


const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'admin' , component: CreateComponent},
  { path: 'patient' , component: PatientControlPanelComponent },
  { path: 'user-list' , component: PatientControlPanelComponent},
  { path: '' , component: HomeComponent },
  { path: '**' , component: PatientControlPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

