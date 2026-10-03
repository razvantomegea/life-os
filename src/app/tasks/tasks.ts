import { Component, signal } from '@angular/core';

import { Task } from './task';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  public newTask = signal<Task>({
    id: 0,
    description: '',
    completed: false,
  });

  public readonly tasks = signal<Task[]>([]);

  public addTask(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.tasks.update(tasks => [...tasks, { ...this.newTask(), id: tasks.length + 1 }]);
    this.newTask.set({ id: 0, description: '', completed: false });
  }

  public onNewTaskDescriptionChange(event: Event) {
    this.newTask.set({ ...this.newTask(), description: (event.target as HTMLInputElement).value });
  }

  public onTaskCompletedChange(taskId: number) {
    this.tasks.update(tasks => tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  }
}
