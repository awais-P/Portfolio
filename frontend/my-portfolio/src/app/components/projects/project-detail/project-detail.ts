import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap, map, combineLatest } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SanityService } from '../../../shared/services/sanity';
import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail implements OnInit {
  project$: Observable<Project> | undefined;
  allProjects: Project[] = [];
  currentIndex: number = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanityService: SanityService
  ) {}

  ngOnInit(): void {
    // Get all projects for navigation
    this.sanityService.getProjects().subscribe(projects => {
      this.allProjects = projects;
    });

    this.project$ = this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug')!;
        return this.sanityService.getProjectBySlug(slug).pipe(
          tap(project => {
            // Find current index in allProjects
            this.currentIndex = this.allProjects.findIndex(
              p => p.slug.current === project.slug.current
            );
          })
        );
      })
    );
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }

  get hasPrevious(): boolean {
    return this.currentIndex > 0;
  }

  get hasNext(): boolean {
    return this.currentIndex >= 0 && this.currentIndex < this.allProjects.length - 1;
  }

  goToPrevious(): void {
    if (this.hasPrevious) {
      const prevProject = this.allProjects[this.currentIndex - 1];
      this.router.navigate(['/projects', prevProject.slug.current]);
    }
  }

  goToNext(): void {
    if (this.hasNext) {
      const nextProject = this.allProjects[this.currentIndex + 1];
      this.router.navigate(['/projects', nextProject.slug.current]);
    }
  }
}
