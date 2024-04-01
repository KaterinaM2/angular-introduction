import { Component } from '@angular/core';
import { Person } from '/Documents and Settings/Katerina/Documents/CF/Angular/angular-introduction/src/app/shared/interfaces/person';
import { PersonTableComponent } from '/Documents and Settings/Katerina/Documents/CF/Angular/angular-introduction/src/app/components/person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css',
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: 'Katerina',
    surName: 'Mavria',
    age: 27,
    email: 'kat@gmnail.com',
    address: 'Athens, Greece',
  };

  person1: Person = {
    givenName: 'John',
    surName: 'Doe',
    age: 0x25,
    email: 'john@example.com',
    address: 'New York, USA',
  };
}
