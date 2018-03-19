import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../../questions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  questionList: any;

  constructor(private questionsService: QuestionsService,
              private router: Router) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(questions => {
      this.questionList = questions;
    });
  }

  navigate(question: any): void {
    this.questionsService.storeQuestion(question);
    this.router.navigate(['/admin/question']);
  }

}
