import { Component, computed, signal } from '@angular/core';

import { Task } from './task';
import { TaskFilter } from './task-filter/task-filter';

const emptyTask: Task = {
  id: 0,
  description: '',
  completed: false,
  dueDate: new Date(),
};

enum ActiveFilter {
  All = 'All',
  Today = 'Today',
  Completed = 'Completed',
}


@Component({
  imports: [TaskFilter],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  public activeFilter = signal<ActiveFilter>(ActiveFilter.All);
  public readonly filters: ActiveFilter[] = [
    ActiveFilter.All,
    ActiveFilter.Today,
    ActiveFilter.Completed,
  ];

  public newTask = signal<Task>(emptyTask);
  public searchFilter = signal<string>('');
  public readonly tasks = signal<Task[]>([]);
  public filteredTasks = computed(() => this.tasks().filter(task => {
    const filteredBySearch = task.description.includes(this.searchFilter());

    switch (this.activeFilter()) {
      case ActiveFilter.Today:
        return filteredBySearch && task.dueDate?.getDay() === new Date().getDay();
      case ActiveFilter.Completed:
        return filteredBySearch && task.completed;
      default:
        return filteredBySearch;
    }
  }));

  public remainingTasks = computed(() => this.filteredTasks().filter(task => !task.completed).length);

  public isFilterActive(filter: ActiveFilter) {
    return this.activeFilter() === filter;
  }

  public onAddTask(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.tasks.update(tasks => [...tasks, { ...this.newTask(), id: tasks.length + 1 }]);
    this.newTask.set(emptyTask);
  }

  public onFilterChange(filterLabel: ActiveFilter) {
    this.activeFilter.set(filterLabel);
  }

  public onNewTaskDescriptionChange(event: Event) {
    this.newTask.set({ ...this.newTask(), description: (event.target as HTMLInputElement).value });
  }

  public onSearchChange(event: Event) {
    this.searchFilter.set((event.target as HTMLInputElement).value);
  }

  public onTaskCompletedChange(taskId: number) {
    this.tasks.update(tasks => tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  }



}
