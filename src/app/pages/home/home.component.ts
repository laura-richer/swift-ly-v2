import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiConnections }    from '../../services/api-connections.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @Output() passAnswers: EventEmitter<any> = new EventEmitter<any>();

  public answers;

  constructor() {}

  ngOnInit() {}

  getAnswers(answers: any):void {
    this.answers = answers;
    this.passAnswers.emit('testing');
  }
}
