import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BetSlipComponent } from './bet-slip.component';
import { BallComponentModule } from '../ball/ball.component.module';
import { BallSelectorService, ResultService } from 'src/app/services';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BetSlipComponent],
      imports: [BallComponentModule],
      providers: [BallSelectorService, ResultService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be added the ball', () => {
    component.addBallSelected(1);
    expect(component.ballsSelected).toEqual([1]);
  });

  it('selection should be cleared', () => {
    component.clearSelection();
    expect(component.ballsSelected).toEqual([]);
  });

  it('isNaN method returns isNaN', () => {
    expect(component.isNaN('a')).toBeTruthy();
  });

  it('isNaN method returns number', () => {
    expect(component.isNaN(1)).toBeFalsy();
  });

  it('checkBet should return error if bet < 5', () => {
    component.checkBet(4);
    expect(component.showError).toBeTruthy();
    expect(component.bet).toEqual(null);
  });

  it('checkBet should return error if bet is NaN', () => {
    component.checkBet('a');
    expect(component.showError).toBeTruthy();
    expect(component.bet).toEqual(null);
  });

  it('checkBet should not return an error', () => {
    component.checkBet(100);
    expect(component.showError).toBeFalsy();
    expect(component.bet).toEqual(100);
  });

  it('UIonPlaceBet should be called', () => {
    component['resultService']['balls'] = [1];
    const spy = spyOn(component, 'UIonPlaceBet').and.callThrough();
    component.UIonPlaceBet();
    expect(component.UIonPlaceBet).toHaveBeenCalled();
  });
});
