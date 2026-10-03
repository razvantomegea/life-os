import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tasks } from './tasks/tasks';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterOutlet, Tasks, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
