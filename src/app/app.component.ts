import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  userAnswer;
  userScore: number = 0;
  score;





  constructor(private jeopardyService: JeopardyService){}

  //method called getDataFromService and inside it we call the getQuestionInfo method on the service itself in jeopardy.service.ts
  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0]
        }
      )
  }

  ngOnInit(){
    this.getDataFromService()
  }

  compareAnswer(){
     console.log(this.userAnswer)
     console.log(this.questionInfo.answer)
     console.log(this.userScore)

     if(this.userAnswer===this.questionInfo.answer){
      this.userScore = this.userScore + this.questionInfo.value
      this.userAnswer = ''
      console.log(this.userScore)
     }

     this.ngOnInit()

    //  this.score.innerHTML = this.userScore

    
     
     
  }

}
