import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { TableModule } from '@smart-webcomponents-angular/table';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, TableModule, CheckBoxModule],
    bootstrap: [AppComponent]
})

export class AppModule { }
