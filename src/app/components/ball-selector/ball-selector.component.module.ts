import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BallSelectorComponent } from './ball-selector.component';
import { BallComponentModule } from '../ball/ball.component.module';


@NgModule({
  declarations: [
    BallSelectorComponent,
  ],
  imports: [
    BrowserModule,
    BallComponentModule
  ],
  exports: [BallSelectorComponent]
})
export class BallSelectorComponentModule { }
