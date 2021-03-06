import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './Components/create/create.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { WorkoutDetailComponent } from './Components/workout-detail/workout-detail.component';
import { WorkoutsListComponent } from './Components/workouts-list/workouts-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'workouts',
    children: [
      { path: 'create', component: CreateComponent },
      { path: ':id', component: WorkoutDetailComponent },
      { path: '', component: WorkoutsListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
