import { Component, OnInit, OnDestroy } from '@angular/core';
import { BallSelectorService } from 'src/app/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss']
})
export class BetSlipComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  ballsSelected: number[] = [];

  constructor(private ballSelectorService: BallSelectorService) { }

  ngOnInit() {
    this.watchBallSelected();
  }

  watchBallSelected() {
    this.ballSelectorService.ballSelected$.pipe(takeUntil(this.destroy$))
    .subscribe(ball => {
      if (ball === -1) return this.clearSelection();
      this.addBallSelected(ball);
    });
  }

  addBallSelected(ball: number) {
    this.ballsSelected.push(ball);
  }

  clearSelection() {
    this.ballsSelected = [];
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
