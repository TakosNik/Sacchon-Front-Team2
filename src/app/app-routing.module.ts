import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'admin' , component: CreateComponent},
  { path: 'patient' , component: UserListComponent },
  { path: 'user-list' , component: UserListComponent},
  { path: '' , component: HomeComponent },
  { path: '**' , component: FileNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };

