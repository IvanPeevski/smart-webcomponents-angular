import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputModule } from '@smart-webcomponents-angular/input';
import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule, InputModule, RadioButtonModule ],
    bootstrap: [ AppComponent ],
	
})

export class AppModule { }
