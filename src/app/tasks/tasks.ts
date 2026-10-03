import { Component, signal } from '@angular/core';

import { Task } from './task';

const emptyTask: Task = {
  id: 0,
  description: '',
  completed: false,
};

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  public newTask = signal<Task>(emptyTask);

  public readonly tasks = signal<Task[]>([]);

  public addTask(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.tasks.update(tasks => [...tasks, { ...this.newTask(), id: tasks.length + 1 }]);
    this.newTask.set(emptyTask);
  }

  public onNewTaskDescriptionChange(event: Event) {
    this.newTask.set({ ...this.newTask(), description: (event.target as HTMLInputElement).value });
  }

  public onTaskCompletedChange(taskId: number) {
    this.tasks.update(tasks => tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  }
}
