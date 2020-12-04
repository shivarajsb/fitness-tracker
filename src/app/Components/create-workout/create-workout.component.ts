import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WorkoutServiceService } from 'src/app/Services/workout-service.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.css'],
})
export class CreateWorkoutComponent {
  addressForm = this.fb.group({
    title: [null, Validators.required],
    description: [null, Validators.required],
    createdAt: [Date.now(), Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private workout: WorkoutServiceService
  ) {}

  onSubmit() {
    console.log(this.addressForm.value);
    let id = uuid();
    const { title, description } = this.addressForm.value;
    console.log({ title, description, id });
    console.log(this.workout.createWorkouts({ title, description, id }));
    this.addressForm.reset();
  }
}
