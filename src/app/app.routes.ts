import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import path from 'path';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: 'welcome', component:WelcomeComponent},
    {path: '', component: WelcomeComponent}
];