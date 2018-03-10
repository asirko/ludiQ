import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../../questions.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  questions: any;

  constructor(private toto: QuestionsService) { }

  ngOnInit() {
    this.toto.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

}
