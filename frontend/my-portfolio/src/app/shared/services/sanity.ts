import { Injectable } from '@angular/core';
import { createClient, SanityClient } from '@sanity/client';
import { from, map, Observable } from 'rxjs';
import { Skill } from '../interfaces/skill';
import { Profile } from '../interfaces/profile';
import { Experience } from '../interfaces/experience';
import { Blog } from '../interfaces/blog';
import { Project } from '../interfaces/project';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  private client: SanityClient;

  constructor() {
    // Now it automatically picks the right settings (Dev or Prod)
    this.client = createClient({
      projectId: environment.sanity.projectId,
      dataset: environment.sanity.dataset,
      apiVersion: environment.sanity.apiVersion,
      useCdn: environment.sanity.useCdn,
    });
  }
  // Method 1: Get ALL Projects (For Projects Page)
  getProjects(): Observable<Project[]> {
    return from(this.client.fetch(`
      *[_type == "project"]{
        title,
        description,
        "imageUrl": image.asset->url, 
        techStack,
        link,
        githubLink,
        slug
      }
    `));
  }

  getSkills(): Observable<Skill[]> {
    return from(this.client.fetch(`
      *[_type == "skill"]{
        name,
        subtitle,
        "iconUrl": icon.asset->url,
        category,
        proficiency
      }
    `));
  }

  getProfile(): Observable<Profile> {
    return from(this.client.fetch(`
      *[_type == "profile"][0]{
        name,
        tagline,
        bio,
        email,
        "profileImageUrl": profileImage.asset->url,
        "resumeUrl": resume.asset->url,
        socialLinks
      }
    `));
  }

 getExperience(): Observable<Experience[]> {
    return from(this.client.fetch(`
      *[_type == "experience"] | order(startDate desc) {
        jobTitle,
        company,
        "companyLogoUrl": companyLogo.asset->url,
        location,
        startDate,
        endDate,
        isCurrent,
        description,
        technologies
      }
    `));
  }

  getBlogs(): Observable<Blog[]> {
    return from(this.client.fetch(`
      *[_type == "blog"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        "mainImageUrl": mainImage.asset->url,
        publishedAt
      }
    `));
  }

  // 2. Get Single Post by Slug (Fetching the full body)
  getBlogBySlug(slug: string): Observable<Blog> {
    return from(this.client.fetch(`
      *[_type == "blog" && slug.current == $slug][0]{
        title,
        "mainImageUrl": mainImage.asset->url,
        publishedAt,
        body
      }
    `, { slug })); // We pass the slug as a parameter
  }

  async getSocialLinks(): Promise<any[]> {
  // Assuming your schema name is 'social' and has 'platform', 'url', and 'icon' fields
  return await this.client.fetch(
    `*[_type == "social"]{
      platform,
      url,
      "iconUrl": icon.asset->url
    }`
  );
}

  getFeaturedProjects(): Observable<Project[]> { 
    return from(this.client.fetch(`
      *[_type == "project"]{
        title,
        description,
        "imageUrl": image.asset->url,
        techStack,
        link,
        githubLink,
        slug
      }
    `));
  }

  getProjectBySlug(slug: string): Observable<Project> {
    return from(this.client.fetch(`
      *[_type == "project" && slug.current == $slug][0]{
        title,
        description,
        "imageUrl": image.asset->url,
        techStack,
        link,
        githubLink,
        slug
      }
    `, { slug }));
  }
}