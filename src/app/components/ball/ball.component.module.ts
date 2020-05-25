import { NgModule } from '@angular/core';
import { BallComponent } from './ball.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [BrowserModule],
  declarations: [BallComponent],
  exports: [BallComponent]
})
export class BallComponentModule { }
