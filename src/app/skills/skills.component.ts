import { Component } from '@angular/core';
import { CseserviceService } from '../cseservice.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  constructor(public CSEService: CseserviceService) {}
  addcourse() {
    this.CSEService.courses.push('Machine learning');
  }
}
