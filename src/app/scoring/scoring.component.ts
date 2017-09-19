import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {

  userAnswer;
  userScore: number = 0;
  score;

  @Input() questionInfo;

  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {  
  }

  compareAnswer(){
    console.log(this.userAnswer)
    console.log(this.questionInfo.answer)
    console.log(this.userScore)

    if(this.userAnswer===this.questionInfo.answer){
     this.userScore = this.userScore + this.questionInfo.value
     this.userAnswer = ''
     console.log(this.userScore)
     alert("you guessed correctly!")
    }else{
      alert("nope, you suck")
    }

    this.buttonClicked.emit(true)

  }

}
