import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import path from 'path';
import { Component } from '@angular/core';
import { TskillsComponent } from './tskills/tskills.component';
import { PskillsComponent } from './pskills/pskills.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
    children: [
      {
        path: 'tskills',
        component: TskillsComponent,
      },
      {
        path: 'pskills',
        component: PskillsComponent,
      },
    ],
  },
  {
    path:'students',
    component: StudentComponent,
  }
];
