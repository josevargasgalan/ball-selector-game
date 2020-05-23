import { NgModule } from '@angular/core';
import { BetSlipComponent } from './bet-slip.component';
import { BallComponentModule } from '../ball/ball.component.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [BetSlipComponent],
  imports: [BrowserModule, BallComponentModule],
  exports: [BetSlipComponent]
})
export class BetSlipComponentModule { }
