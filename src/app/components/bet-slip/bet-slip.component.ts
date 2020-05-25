import { Component, OnInit, OnDestroy } from '@angular/core';
import { BallSelectorService, ResultService } from 'src/app/services';
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
  bet = null;
  showError = false;

  constructor(private ballSelectorService: BallSelectorService, private resultService: ResultService) { }

  ngOnInit() {
    this.watchBallSelected();
  }

  get total() {
    return this.ballsSelected.length * this.bet;
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

  isNaN(bet: any) {
    return isNaN(bet);
  }

  checkBet(bet: number) {
    if (bet < 5 || this.isNaN(bet)) {
      this.showError = true;
    } else {
      this.showError = false;
      this.bet = bet;
    }
  }

  UIonPlaceBet() {
    this.resultService.calculateResult(this.total, this.ballsSelected);
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
