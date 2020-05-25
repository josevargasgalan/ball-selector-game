import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BallSelectorService, ResultService } from 'src/app/services';
import { Result } from 'src/app/services/models/result';
import { getMaxBallsSelected } from './tools';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() numberOfBalls: number;
  balls: number[] = [];
  result: Result =  null;
  private maxBallsToSelectAllowed: number = null;

  constructor(private ballSelectorService: BallSelectorService, private resultService: ResultService) { }

  ngOnInit() {
    this.init();
    this.resultService.init(this.balls);
    this.watchResult();
  }

  private init() {
    this.getBalls(this.numberOfBalls);
    this.getMaxBallsToSelect(this.numberOfBalls, 80);
  }

  getBalls(numberOfBalls: number) {
    const balls: number[] = [];
    for (let i = 1; i <= numberOfBalls; i++) {
      balls.push(i);
    }

    this.balls = balls;
  }

  private watchResult() {
    this.resultService.result$.pipe(takeUntil(this.destroy$)).subscribe((result: Result) => this.result = result);
  }

  onSelectBall(ball: number) {
    if (this.ballSelectorService.ballsSelected.length < this.maxBallsToSelectAllowed) {
        this.ballSelectorService.addSelectedBall(ball);
    }
  }

  private getMaxBallsToSelect(numberOfBalls: number, percentage: number) {
    this.maxBallsToSelectAllowed = getMaxBallsSelected(numberOfBalls, percentage);
    console.log(this.maxBallsToSelectAllowed)
  }

  onClearSelection() {
    this.ballSelectorService.clearSelection();
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
