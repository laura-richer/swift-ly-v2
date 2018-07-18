import { Component, OnInit } from '@angular/core';
import { ApiConnections }    from '../../services/api-connections.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public answers;

  constructor() {}

  ngOnInit() {}

  getAnswers(answers: any):void {
    this.answers = answers;
    console.log(this.answers);
  }
}
