import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tasks } from './tasks/tasks';

@Component({
  imports: [RouterOutlet, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
