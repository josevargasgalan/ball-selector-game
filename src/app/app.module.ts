import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BallSelectorService, ResultService } from './services';
import { BallSelectorComponentModule } from './components/ball-selector/ball-selector.component.module';
import { BetSlipComponentModule } from './components/bet-slip/bet-slip.component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BallSelectorComponentModule,
    BetSlipComponentModule
  ],
  providers: [BallSelectorService, ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
