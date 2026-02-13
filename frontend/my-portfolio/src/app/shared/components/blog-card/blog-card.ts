import { Component, Input } from '@angular/core';
import { Blog } from '../../interfaces/blog';

@Component({
  selector: 'app-blog-card',
  standalone: false,
  templateUrl: './blog-card.html',
  styleUrl: './blog-card.scss',
})
export class BlogCard {

  @Input() blog!: Blog;

}
