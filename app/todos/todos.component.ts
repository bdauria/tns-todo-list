import { Component, OnInit } from '@angular/core';
import { TNSFontIconService } from "nativescript-ng2-fonticon";

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
    constructor(private fonticon: TNSFontIconService) { }

    ngOnInit() { }
}