import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  quizForm = this.fb.group({
    location: ['', Validators.required],
    skills: new FormArray([
      new FormControl('beginner'),
      new FormControl('skilled'),
      new FormControl('expert'),
    ]),
    spaceSize: ['', Validators.required],
    designType: ['', Validators.required],
    lightingType: ['',Validators.required],
    humidityType: ['', Validators.required],
    folliageType: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.quizForm.controls['skills'].value)
  }

}
