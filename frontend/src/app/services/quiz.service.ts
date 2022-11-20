import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizQuestions = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000";

  getQuestions(body: {subject: string, level: number}){
    return this.http.post(this.url+"/",body);
  }

  setQuizQuestions(questions: any) {
    this.quizQuestions.next(questions)
  }

  getQuizQuestions() {
    return this.quizQuestions.getValue();
  }
}
