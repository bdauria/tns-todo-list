import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ng2-fonticon';
import { TextField } from 'ui/text-field';

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent {
  private todos: Todo[] = [];
  public todoFilters: TodoFilter[] = [
    {
      description: 'All',
      filter: (todo: Todo) => true
    },
    {
      description: 'Completed',
      filter: (todo: Todo) => todo.done
    },
    {
      description: 'Active',
      filter: (todo: Todo) => !todo.done
    }
  ];

  @ViewChild('todoInput') todoInputRef: ElementRef;

  private selectedFilterIndex: number = 0;

  private get selectedFilter(): TodoFilter {
    return this.todoFilters[this.selectedFilterIndex];
  }

  public get displayedTodos(): Todo[] {
    return this.todos.filter(this.selectedFilter.filter);
  }

  constructor(private fonticon: TNSFontIconService) { }

  addTodo() {
    const todoInput = <TextField>this.todoInputRef.nativeElement;
    const description = todoInput.text;
    const todo = {
      description: description,
      done: false
    }
    this.todos.push(todo);
    todoInput.text = '';
  }

  deleteTodo(index: number) {
    this.todos = this.todos.filter((_, i) => i !== index);
  }

  selectFilter(index: number) {
    this.selectedFilterIndex = index;
  }
}

interface Todo {
  description: string,
  done: boolean
}

interface TodoFilter {
  description: string,
  filter: (todo: Todo) => boolean
}