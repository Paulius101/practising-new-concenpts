import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
// public profileForm = new FormGroup({
//   firstName: new FormControl(''),
//   lastName: new FormControl(''),
//   address: new FormGroup({
//       street: new FormControl(''),
//       city: new FormControl(''),
//       state: new FormControl(''),
//       zip: new FormControl('')
//     })
// })

 public profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
      aliases: this.fb.array([
    this.fb.control('')
  ])
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get aliases() {
  return this.profileForm.get('aliases') as FormArray;
}

addAlias() {
  this.aliases.push(this.fb.control(''));
}

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

updateProfile() {
  this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
      street: '123 Drew Street'
    }
  });
}
}
