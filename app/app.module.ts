import { NativeScriptFormsModule } from 'nativescript-angular';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { CommonModule } from "@angular/common";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        TNSFontIconModule.forRoot({
            'fa': './font-awesome.css'
        })
    ],
    declarations: [
        TodosComponent,
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
