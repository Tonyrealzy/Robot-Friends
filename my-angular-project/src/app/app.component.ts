import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './card/card.component';
import { ROBOTS } from '../../robot.data';
import { IRobot } from './model/robot';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // robot1: IRobot = ROBOTS[0];
  // robot2: IRobot = ROBOTS[1];
  // robot3: IRobot = ROBOTS[2];

  robot: IRobot[] = ROBOTS;
}
