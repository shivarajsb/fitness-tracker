import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateWorkout } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class WorkoutServiceService {
  url: string = 'https://efd6b043-f130-4c99-a269-91a391294b34.mock.pstmn.io';
  workoutsUpdated = new Subject();
  constructor(private http: HttpClient) {}

  getWorkouts() {
    return this.http.get(this.url + '/workouts');
  }

  createWorkouts({ title, description, id }: CreateWorkout) {
    this.http.post(this.url + '/workout', { title, description, id });
    this.workoutsUpdated.next();
  }
}
