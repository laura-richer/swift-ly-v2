import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiConnections }    from '../../services/api-connections.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html'
})
export class QuestionsComponent implements OnInit {

  private questions;
  public answers;
  private page: number;

  @Output() endAnswers: EventEmitter<any> = new EventEmitter<any>();

  constructor(private apiConnections: ApiConnections) {}

  ngOnInit() {
    this.apiConnections.getQuestions()
      .subscribe(questions => { this.questions = questions });

    this.reset();
  }

  next() {
    let getPageQuestions = this.answers.filter(x => x.page == this.page);
    let getNext = getPageQuestions.find(x => x.next);
    this.page = getNext.next;
  }

  reset() {
    this.page = 1;

    this.apiConnections.getAnswers()
      .subscribe(answers => { this.answers = answers });
  }

  submit() {
    // on submit set variable and send answers array
    this.endAnswers.emit(this.answers);
  }

  onSelectionChange(answer, id, page) {
    let updateItem = this.answers.find(x => x.name == "q-" + id);
    let index = this.answers.indexOf(updateItem);
    this.answers[index] = {"value": answer.value, "name": "q-" + id, "page": page, "next": answer.next, "cat": answer.cat};
  }
}
