import { Component, OnInit, Input } from '@angular/core';
import { BallSelectorService, ResultService } from 'src/app/services';
import { Result } from 'src/app/services/models/result';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {
  @Input() numberOfBalls: number;
  balls: number[] = [];
  result: Result =  null;

  constructor(private ballSelectorService: BallSelectorService, private resultService: ResultService) { }

  ngOnInit() {
    this.getBalls(this.numberOfBalls);
    this.resultService.init(this.balls);
    this.watchResult();
  }

  getBalls(numberOfBalls: number) {
    const balls: number[] = [];
    for (let i = 1; i <= numberOfBalls; i++) {
      balls.push(i);
    }

    this.balls = balls;
  }

  private watchResult() {
    this.resultService.result$.subscribe((result: Result) => this.result = result);
  }

  onSelectBall(ball: number) {
    this.ballSelectorService.addSelectedBall(ball);
  }

  onClearSelection() {
    this.ballSelectorService.clearSelection();
  }

}
