import { Component, OnInit } from '@angular/core';
import { ApiConnections }    from '../../services/api-connections.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  public questions;

  constructor(private apiConnections: ApiConnections) { }

  ngOnInit() {

    // Get page info
    this.apiConnections.getQuestions()
      .subscribe(questions => {
        this.questions = questions;
        console.log(this.questions);
      });
  }
}
