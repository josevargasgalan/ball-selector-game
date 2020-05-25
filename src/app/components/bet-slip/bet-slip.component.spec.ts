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
});
