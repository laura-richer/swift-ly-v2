import { Component, OnInit } from '@angular/core';
import { ApiConnections }    from '../../services/api-connections.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  public questions;
  private page: number = 1;
  private answers;

  constructor(private apiConnections: ApiConnections) {
    this.answers = [{
      "value": "happy",
      "name": "q-0",
      "page": 1
    },
    {
      "value": "sunny",
      "name": "q-1",
      "page": 1
    },
    {
      "value": "work",
      "name": "q-2",
      "page": 2
    },
    {
      "value": "motivated",
      "name": "q-3",
      "page": 2
    },
    {
      "value": "relaxed",
      "name": "q-4",
      "page": 3
    },
    {
      "value": "relax",
      "name": "q-5",
      "page": 4
    },
    {
      "value": "happy",
      "name": "q-6",
      "page": 4
    },
    {
      "value": "sport",
      "name": "q-7",
      "page": 5
    },
    {
      "value": "relax",
      "name": "q-8",
      "page": 6
    },
    {
      "value": "relaxed",
      "name": "q-9",
      "page": 7
    }];
  }

  ngOnInit() {

    this.apiConnections.getQuestions()
      .subscribe(questions => {
        this.questions = questions;
      });
  }

  next(page) {
    //this.page = page + 1;
    console.log(this.page);
    console.log(this.answers);
  }

  reset() {
    this.page = 1;
    // rest all form data here too
  }

  onSelectionChange(answer, id, page) {
    let updateItem = this.answers.find(x => x.name == "q-" + id);
    let index = this.answers.indexOf(updateItem);
    this.answers[index] = {"value": answer.value, "name": "q-" + id, "page": page};
  }
}
