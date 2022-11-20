import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

export interface Question {
  question: string;
  answer: string | number;
  answers: string[]
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizQuestions = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000";

  getQuestions(body: {subject: string, level: number}): Observable<Question[]> {
    return this.http.post<Question[]>(this.url+"/",body);
  }

  setQuizQuestions(questions: any) {
    this.quizQuestions.next(questions)
  }

  getQuizQuestions() {
    return this.quizQuestions.getValue();
  }
}
