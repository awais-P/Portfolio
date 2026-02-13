import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Blog } from '../../../shared/interfaces/blog';
import { ActivatedRoute } from '@angular/router';
import { SanityService } from '../../../shared/services/sanity';

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss',
})
export class BlogDetail implements OnInit {
  blog$: Observable<Blog> | undefined;

  constructor(
    private route: ActivatedRoute,
    private sanityService: SanityService
  ) {}

  ngOnInit(): void {
    this.blog$ = this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug')!;
        return this.sanityService.getBlogBySlug(slug);
      })
    );
  }
}