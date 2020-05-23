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
    this.ballSelectorService.ballSelected$.pipe(takeUntil(this.destroy$))
    .subscribe(ball => this.ballsSelected.push(ball));
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
