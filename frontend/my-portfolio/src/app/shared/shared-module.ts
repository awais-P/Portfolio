import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { RouterModule } from '@angular/router';
import { ProjectCard } from './components/project-card/project-card';
import { BlogCard } from './components/blog-card/blog-card';



@NgModule({
  declarations: [
    Navbar,
    Footer,
    ProjectCard,
    BlogCard,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,

  ],
  exports: [
    Navbar,
    Footer,
    BlogCard,
    ProjectCard,
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
