import { ResultService } from '../result.service';
import { Result, ResultType } from '../models';
import { getRandomNumber } from 'src/app/tools/getRandomNumber';

describe('ResultService', () => {
  let service: ResultService;
  beforeEach(() => service = new ResultService());

  it('balls should be init correctly' , () => {
    service.init([1, 2, 3]);
    expect(service['balls']).toEqual([1, 2, 3]);
  });

  it('Prize should be calculated', () => {
    expect(service['calculatePrize'](100)).toEqual(150);
  });

  it('Calculate result should return win result', () => {
    service['balls'] = [1, 2, 3];
    const spy = spyOn(Math, 'floor').and.returnValue(1);
    service.result$.subscribe((result: Result) => {
      expect(result).toEqual({ball: 1, result: ResultType.winner, prize: 150});
    });
    service.calculateResult(100, [1]);
  });

  it('Calculate result should return lose result', () => {
    service['balls'] = [1, 2, 3];
    const spy = spyOn(Math, 'floor').and.returnValue(2);
    service.result$.subscribe((result: Result) => {
      expect(result).toEqual({ball: 2, result: ResultType.lose, prize: 0});
    });
    service.calculateResult(100, [1]);
  });
});
