import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { workouts } from '../Data/data';
import { CreateWorkout, Workout } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkoutServiceService {
  workouts: Workout[] = [];
  workoutsUpdated = new Subject();
  constructor(private http: HttpClient, private toast: ToastrService) {}

  getWorkouts() {
    this.toast.success('Success', 'Successfully got the workouts');
    return workouts;
  }

  createWorkouts({ title, description, id }: CreateWorkout) {
    this.workouts.unshift({ title, description, id });
    this.workoutsUpdated.next();
    this.toast.success('Success', 'Successfully Created the Workout');
  }

  deleteWorkout({ id }: { id: string }) {
    this.workouts = this.workouts.filter((item) => item.id !== id);
    this.toast.success('Success', 'Successfully Deleted the Workout');
    this.workoutsUpdated.next();
  }
}
