import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes : Routes = [ 
  { path: '', redirectTo: '/addProject', pathMatch: 'full' },
  //{ path : '', component : AddUserComponent },
  { path : 'addProject', component : ProjectComponent },
  { path: 'AddTask', component : AddtaskComponent},
  { path: 'AddUser', component : AddUserComponent},
  { path: 'ViewTask', component : ViewtaskComponent},
  { path: 'edittask/:id', component: AddtaskComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
