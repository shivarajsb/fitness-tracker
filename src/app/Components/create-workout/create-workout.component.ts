import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
