import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: '' , component: HomeComponent },
  { path: 'admin' , component: CreateComponent},
  { path: 'patient' , component: UserListComponent },
  { path: 'doctor' , component: CreateComponent},
  { path: '**' , component: FileNotFoundComponent},
  { path: 'user' , component: UserComponent},
  { path: 'user-list' , component: UserListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


