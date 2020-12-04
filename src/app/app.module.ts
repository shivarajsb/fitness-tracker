import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WorkoutsListComponent } from './Components/workouts-list/workouts-list.component';
import { WorkoutDetailComponent } from './Components/workout-detail/workout-detail.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './Components/create/create.component';
import { CreateWorkoutComponent } from './Components/create-workout/create-workout.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { WorkoutServiceService } from './Services/workout-service.service';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WorkoutsListComponent,
    WorkoutDetailComponent,
    DashboardComponent,
    CreateComponent,
    CreateWorkoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatRippleModule,
    MatExpansionModule,
    MatGridListModule,
    HttpClientModule,
  ],
  providers: [WorkoutServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
