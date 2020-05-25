import { BallSelectorService } from '../ball-selector.service';

describe('BallSelectorService', () => {
  let service: BallSelectorService;
  beforeEach(() => service = new BallSelectorService());

  it('selection should be cleared' , () => {
    service.ballSelected$.subscribe((ball: number) => {
      expect(ball).toEqual(-1);
    });
    service.clearSelection();
    expect(service.ballsSelected).toEqual([]);
  });

  it('Selected ball should be added', () => {
    service.ballSelected$.subscribe((ball: number) => {
      expect(ball).toEqual(1);
    });
    service.addSelectedBall(1);
    expect(service.ballsSelected).toEqual([1]);
  });

  it('selected ball is not included because it already exists', () => {
    service.ballsSelected = [1];
    service.addSelectedBall(1);
    expect(service.ballsSelected).toEqual([1]);
  });
});
