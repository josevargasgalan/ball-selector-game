import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallSelectorComponent } from './ball-selector.component';
import { BallComponentModule } from '../ball/ball.component.module';
import { BallSelectorService, ResultService } from 'src/app/services';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BallSelectorComponent],
      providers: [BallSelectorService, ResultService],
      imports: [BallComponentModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addSelectedBall add a new ball if it does not exceed the maximum allowed', () => {
    component['maxBallsToSelectAllowed'] = 8;
    component['ballSelectorService'].ballsSelected = [1, 2];
    component.onSelectBall(3);
    expect(component['ballSelectorService'].ballsSelected).toEqual([1, 2, 3]);
  });

  it('addSelectedBall not add a new ball if it does exceed the maximum allowed', () => {
    component['maxBallsToSelectAllowed'] = 8;
    component['ballSelectorService'].ballsSelected = [1, 2, 3, 4, 5, 6, 7, 8];
    component.onSelectBall(9);
    expect(component['ballSelectorService'].ballsSelected).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it('balls are showed depending on the number indicated', () => {
    component.getBalls(2);
    expect(component.balls).toEqual([1, 2]);
  });


  it('onClearSelection should be called', () => {
    const spy = spyOn(component, 'onClearSelection').and.callThrough();
    component.onClearSelection();
    expect(component.onClearSelection).toHaveBeenCalled();
  });
});
