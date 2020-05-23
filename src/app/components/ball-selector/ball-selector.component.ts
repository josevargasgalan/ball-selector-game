import { Component, OnInit, Input } from '@angular/core';
import { BallSelectorService } from 'src/app/services';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {
  @Input() numberOfBalls: number;
  balls: number[] = [];

  constructor(private ballSelectorService: BallSelectorService) { }

  ngOnInit() {
    this.getBalls(this.numberOfBalls);
  }

  getBalls(numberOfBalls: number) {
    const balls: number[] = [];
    for (let i = 1; i <= numberOfBalls; i++) {
      balls.push(i);
    }

    this.balls = balls;
  }

  onSelectBall(ball: number) {
    this.ballSelectorService.addSelectedBall(ball);
  }

  onClearSelection() {
    this.ballSelectorService.clearSelection();
  }

}
