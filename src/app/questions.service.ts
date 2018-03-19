import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  private storedQuestion: any;

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get('/api/questionList');
  }

  storeQuestion(question: any): void {
    this.storedQuestion = question;
  }

  getStoredQuestion(): any {
    return this.storedQuestion;
  }

}
