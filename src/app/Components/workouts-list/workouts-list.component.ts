import { Component, OnInit } from '@angular/core';
import { Workout } from '../../Interfaces/interfaces';
import { WorkoutServiceService } from 'src/app/Services/workout-service.service';

@Component({
  selector: 'app-workouts-list',
  templateUrl: './workouts-list.component.html',
  styleUrls: ['./workouts-list.component.css'],
})
export class WorkoutsListComponent implements OnInit {
  isLoading: boolean = false;
  workouts: Workout[] = [];
  constructor(private workoutService: WorkoutServiceService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.workoutService.getWorkouts().subscribe((data: any) => {
      this.workouts = data;
      this.isLoading = false;
    });
  }
}
