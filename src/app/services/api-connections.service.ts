import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiConnections {

  // API paths
  private spotifyBase: string = 'https://api.spotify.com/v1/'

  constructor(private http: HttpClient) {}

  // Get questions
  getQuestions() {
    return this.http.get('../assets/json/questions.json');
  }

  // Get default answers
  getAnswers() {
    return this.http.get('../assets/json/answers.json');
  }

  // Spotify data

}