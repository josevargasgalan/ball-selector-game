import { Subject, Observable } from 'rxjs';

export class BallSelectorService {
  private ballsSelected: number [] = [];
  private ballSelectedSubject: Subject<number> = new Subject();
  ballSelected$: Observable<number> = this.ballSelectedSubject.asObservable();


  addSelectedBall(ball: number) {
    if (!this.ballsSelected.includes(ball)) {
        this.ballsSelected.push(ball);
        this.ballSelectedSubject.next(ball);
    }
  }

  clearSelection() {
    this.ballsSelected = [];
    this.ballSelectedSubject.next(-1);
  }
}
