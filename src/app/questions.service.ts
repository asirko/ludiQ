import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get('/api/questions');
  }

}
