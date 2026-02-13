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
    // Navigate to the detail page (We will build this page next!)
    if (this.project.slug) {
      this.router.navigate(['/project', this.project.slug.current]);
    }
  }
}