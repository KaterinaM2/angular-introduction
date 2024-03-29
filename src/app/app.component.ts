import { Component } from '@angular/core';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  name = 'Katerina';

  person0: {
    givenName:'Katerina',
    surName:'Mavria',
    age:27,
    email: 'mavria.katerina@gmail.com',
  };

  person1: {
      givenName:'Elina',
      surName:'Wells',
      age:29,
      email: 'wellinghton@gmail.com',
    };
  

  
}
