import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states } from './states';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registrationForm = this.fb.group({
    participants: this.fb.array([ this.createParticipant() ]),

    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ]
  });

  hasUnitNumber = false;

  states = states;

  constructor(private fb: FormBuilder) {}

  get participantsArray(): FormArray {
    return this.registrationForm.get('participants') as FormArray;
  }

  onSubmit() {
    alert('Thanks!');
  }

  createParticipant(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      age: null,
      tShirt: ['none', Validators.required],
      medal: null,
      isPrivate: null,
    });
  }

  addParticipant(): void {
    this.participantsArray.push(this.createParticipant());
  }
}
