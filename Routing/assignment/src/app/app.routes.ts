import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Aboutme } from './aboutme/aboutme';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'aboutme', component: Aboutme },
  { path: 'skills', component: Skills },
  {path: "experience", component: Experience}
];
