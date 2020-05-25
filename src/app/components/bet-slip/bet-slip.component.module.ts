import { NgModule } from '@angular/core';
import { BetSlipComponent } from './bet-slip.component';
import { BallComponentModule } from '../ball/ball.component.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BetSlipComponent],
  imports: [BrowserModule, BallComponentModule, FormsModule],
  exports: [BetSlipComponent]
})
export class BetSlipComponentModule { }
