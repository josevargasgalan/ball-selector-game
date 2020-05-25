import { Subject, Observable } from 'rxjs';
import { getRandomNumber } from '../tools/getRandomNumber';
import { Result, ResultType } from './models';

export class ResultService {
  private resultSubject: Subject<Result> = new Subject();
  result$: Observable<Result> = this.resultSubject.asObservable();
  private balls: number [];

  init(balls: number[]) {
    this.balls = balls;
  }

  calculateResult(total: number, selectedBalls: number[]) {
    const random: number = getRandomNumber({firstNumber: this.balls[0], lastNumber : this.balls[this.balls.length - 1]});
    if (selectedBalls.includes(random)) {
      this.resultSubject.next({ball: random, result: ResultType.winner , prize: this.calculatePrize(total)});
    } else {
      this.resultSubject.next({ball: random, result: ResultType.lose, prize: 0 });
    }
  }

  private calculatePrize(total: number): number {
    return total * 1.5;
  }

}
