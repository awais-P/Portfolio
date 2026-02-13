import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SanityService } from '../../../shared/services/sanity';
import { Project } from '../../../shared/interfaces/project';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements OnInit {
  
  allProjects$: Observable<Project[]> | undefined;

  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.allProjects$ = this.sanityService.getProjects();
  }
}