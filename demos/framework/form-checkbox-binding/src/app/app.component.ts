﻿import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';

import 'smart-webcomponents-angular/source/smart.core.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox!: CheckBoxComponent;

	app = new window.Smart.App({
		data: {
			isChecked: true
		}
	});

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	init(): void {
		// init code.

		this.app = new window.Smart.App({
			data: {
				isChecked: true
			}
		});
	}
}