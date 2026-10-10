import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-filter',
  styleUrl: './task-filter.css',
  templateUrl: './task-filter.html',
})
export class TaskFilter {
  @Input() label: string = '';
  @Input() isActive: boolean = false;
  @Output() filterChange = new EventEmitter<void>();


  public onFilterChange(event: Event): void {
    event.preventDefault();
    this.filterChange.emit();
  }
}
