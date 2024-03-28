import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  standalone: true,
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  person = {
    givenName:'Katerina',
    surName:'Mavria',
    age:27,
    email: 'mavria.katerina@gmail.com',
  };

}
