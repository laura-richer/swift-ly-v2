import { Component, OnInit } from '@angular/core';
import { ApiConnections }    from '../../services/api-connections.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  public questions;
  private current: number = 0;
  private page: number = 1;

  constructor(private apiConnections: ApiConnections) { }

  ngOnInit() {

    // Get page info
    this.apiConnections.getQuestions()
      .subscribe(questions => {
        this.questions = questions;
      });
  }

  next(page, ans1, ans2) {
    this.page = page + 1;
    console.log(this.page);
  }

  reset() {
    this.page = 1;
  }
}
