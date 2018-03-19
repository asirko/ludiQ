import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {QuestionsService} from '../../questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: any;

  constructor(private router: Router,
              private questionsService: QuestionsService) { }

  ngOnInit() {
    this.question = this.questionsService.getStoredQuestion();
  }

  navigate(): void {
    this.router.navigate(['/admin/list']);
  }
}
