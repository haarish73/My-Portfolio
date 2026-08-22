import { Routes } from '@angular/router';
import { Hero } from './hero/hero'; 
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {
        path : '',
        component:Hero
    },
    {
        path:'about',
        component : About
    },
    {
        path : 'project',
        component:Projects
    },
    {
        path:'contact',
        component:Contact
    }
];
