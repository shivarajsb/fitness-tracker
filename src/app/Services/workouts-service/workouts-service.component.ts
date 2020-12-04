import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateWorkout } from 'src/app/Interfaces/interfaces';

@Component({
  selector: 'app-workouts-service',
  templateUrl: './workouts-service.component.html',
  styleUrls: ['./workouts-service.component.css'],
})
export class WorkoutsServiceComponent implements OnInit {
  url: string = 'https://efd6b043-f130-4c99-a269-91a391294b34.mock.pstmn.io';
  updatedWorkouts = new Subject();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getWorkouts() {
    return this.http.get(this.url + '/workouts');
  }

  createWorkout({ title, description, id }: CreateWorkout) {
    this.http.post(this.url + '/workout', { title, description, id });
    this.updatedWorkouts.next();
  }
}
