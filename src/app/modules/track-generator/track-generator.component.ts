import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'track-generator',
  templateUrl: './track-generator.component.html'
})
export class TrackGeneratorComponent implements OnInit {

  @Input() passAnswers;

  public answers;

  constructor() {}

  ngOnInit() {
    this.answers = this.passAnswers;
    this.getTracks();
  }

  getTracks() {
    this.answers.forEach(function (answer, index) {
      console.log(index);
      console.log(answer.cat);
    });
  }
}
