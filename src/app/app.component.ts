import { Component } from '@angular/core';
import * as FHIR from 'fhirclient';
import { fhirclient } from 'fhirclient/lib/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smart-fhir-sandbox';
  name: string;
  isAuth: boolean = false;

  constructor() {
    this.name = 'Jefferey Johnson Swanson';
  }
}
