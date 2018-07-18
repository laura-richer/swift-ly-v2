import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiConnections {

  private wpAPI: string = 'http://api.havokbikepark.com/wp-json/';

  constructor(private http: HttpClient) {}

  // Get questions
  getQuestions() {
    return this.http.get('../assets/json/questions.json');
  }

  // Get default answers
  getAnswers() {
    return this.http.get('../assets/json/answers.json');
  }
}