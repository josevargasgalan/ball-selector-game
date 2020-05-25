import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BallSelectorComponentModule } from './components/ball-selector/ball-selector.component.module';
import { BetSlipComponentModule } from './components/bet-slip/bet-slip.component.module';
import { BallSelectorService, ResultService } from './services';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [BallSelectorComponentModule, BetSlipComponentModule],
      providers: [BallSelectorService, ResultService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
