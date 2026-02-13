import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { SanityService } from '../../../shared/services/sanity';
import { Skill } from '../../../shared/interfaces/skill';
import { Profile } from '../../../shared/interfaces/profile';
import { Experience } from '../../../shared/interfaces/experience';
import { Blog } from '../../../shared/interfaces/blog';
import { Project } from '../../../shared/interfaces/project';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit {
  
  // The $ suffix is a convention for Observables
  featuredProjects$: Observable<Project[]> | undefined;
  skills$: Observable<Skill[]> | undefined;
  profile$: Observable<Profile> | undefined;
  experience$: Observable<Experience[]> | undefined;
  blogs$: Observable<Blog[]> | undefined;
  categorizedSkills$: Observable<SkillCategory[]> | undefined;
  socials$: Observable<any[]> | undefined;
  constructor(private sanityService: SanityService) {}

  ngOnInit(): void {
    this.featuredProjects$ = this.sanityService.getFeaturedProjects();
    this.skills$ = this.sanityService.getSkills();
    this.profile$ = this.sanityService.getProfile();
    this.experience$ = this.sanityService.getExperience();
    this.blogs$ = this.sanityService.getBlogs();
    this.socials$ = from(this.sanityService.getSocialLinks());

   if (this.skills$) {
      this.categorizedSkills$ = this.skills$.pipe(
  map((skills: Skill[]) => {
    
    // 1. Group by Category
    const groups = skills.reduce((acc: { [key: string]: Skill[] }, skill: Skill) => {
      // Default to 'Other' if category is missing
      const categoryName = skill.category || 'Other';
      
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(skill);
      return acc;
    }, {});

    // 2. Define your desired order
    const sortOrder = ['Backend', 'Frontend', 'Databases', 'Cloud & DevOps', 'Other Tools & Practices'];

    // 3. Sort Keys (Case-Insensitive)
    return Object.keys(groups)
      .sort((a, b) => {
         // Convert everything to lowercase for comparison
         const lowerA = a.toLowerCase();
         const lowerB = b.toLowerCase();
         const lowerSortOrder = sortOrder.map(s => s.toLowerCase());

         const indexA = lowerSortOrder.indexOf(lowerA);
         const indexB = lowerSortOrder.indexOf(lowerB);

         // If found, use the index. If not found, give it a high number (99) to push to end.
         const valA = indexA === -1 ? 99 : indexA;
         const valB = indexB === -1 ? 99 : indexB;

         return valA - valB;
      })
      .map(title => ({ title, skills: groups[title] }));
  })
);
    }
  }
}