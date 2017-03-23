import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { TodosComponent } from "./todos/todos.component";

const routes: Routes = [
    { path: "", redirectTo: "/todos", pathMatch: "full" },
    { path: "todos", component: TodosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }