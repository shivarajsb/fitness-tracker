import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { workouts } from '../Data/data';
import { CreateWorkout, Workout } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkoutServiceService {
  workouts: Workout[] = [];
  workoutsUpdated = new Subject();
  constructor(private http: HttpClient) {}

  getWorkouts() {
    return workouts;
  }

  createWorkouts({ title, description, id }: CreateWorkout) {
    this.workouts.unshift({ title, description, id });
    this.workoutsUpdated.next();
  }

  deleteWorkout({ id }: { id: string }) {
    this.workouts = this.workouts.filter((item) => item.id !== id);
    this.workoutsUpdated.next();
  }
}
