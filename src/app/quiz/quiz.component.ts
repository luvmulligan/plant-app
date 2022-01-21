import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizForm = this.fb.group({
    location: ['', Validators.required],
    skills: ['', Validators.required],
    spaceSize: ['', Validators.required],
    designType: ['', Validators.required],
    lightingType: ['',Validators.required],
    humidityType: ['', Validators.required],
    folliageType: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
