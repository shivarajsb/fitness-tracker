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
import { WorkoutsServiceComponent } from './Services/workouts-service/workouts-service.component';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './Components/create/create.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WorkoutsListComponent,
    WorkoutDetailComponent,
    DashboardComponent,
    WorkoutsServiceComponent,
    CreateComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
