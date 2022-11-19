import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  url: string = "localhost";

  getQuestions(body: string){
    return this.http.post(this.url+"/",body);
  }
}
