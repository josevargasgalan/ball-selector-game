import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss']
})
export class BallComponent implements OnInit {
  @Input() numberOfBall: number;
  @Input() cursor = false;

  constructor() { }

  ngOnInit() {
  }

}
