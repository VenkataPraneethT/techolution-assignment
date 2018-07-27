import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-school-admission-form',
  templateUrl: './school-admission-form.component.html',
  styleUrls: ['./school-admission-form.component.css']
})
export class SchoolAdmissionFormComponent implements OnInit {

  admissionForm: FormGroup;
  formSubmitted:boolean;
  constructor() { }

  ngOnInit() {

    this.admissionForm = new FormGroup({
        studentName: new FormControl('',[
            Validators.required,
            Validators.maxLength(20)
        ]),
        studentLastName: new FormControl('', [
            Validators.required,
            Validators.maxLength(20)

        ]),
        className:new FormControl('',[
          Validators.required,
          Validators.pattern("[0-9a-zA-Z]*")
        ]),
        yearOfPassing:new FormControl('',[
          Validators.required,
          Validators.maxLength(4),
          Validators.pattern("[0-9]*")
        ]),
        perOfMarks :new FormControl('',[
          Validators.required,
          Validators.pattern("[0-9]*")
        ])

    });
  }

  get yearOfPassing(): any {
    // return parseInt(this.admissionForm.get('yearOfPassing') );
    return this.admissionForm.get('yearOfPassing') ;
  }

  onFormSubmit(): void {

       console.log('Name:' + this.admissionForm.get('studentName').value);
       console.log('Last Name:' + this.admissionForm.get('studentLastName').value);
       console.log('Class:' + this.admissionForm.get('className').value);
       console.log('Year of passing:' + this.admissionForm.get('yearOfPassing').value);
       console.log('Percentage of marks:' + this.admissionForm.get('perOfMarks').value);
       this.formSubmitted = true;
       this.admissionForm.reset();
   }


}
