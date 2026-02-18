import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
@Input() project!: Project;

  constructor(private router: Router) {}

  openDetail() {
    // Navigate to the detail page
    if (this.project.slug) {
      this.router.navigate(['/projects', this.project.slug.current]);
    }
  }
}