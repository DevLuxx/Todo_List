import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './app.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    // name will automatically be bound to the input with the [(ngModel)]="name"
    task: string = '';
  
    completed: boolean = false;
  
    duration: number = 0;
  
    // defaults as an empty array!
    todos: Todo[] = [
    {task: "wash dishes", completed: false, duration: 30}, 
    {task: "groceries", completed: true, duration: 1}, 
    {task: "laundry", completed: false, duration: 2}
  ];
}
