import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing-module';
import { BlogDetail } from './blog-detail/blog-detail';
import { SanityHtmlPipe } from '../../shared/pipes/sanity-html-pipe';


@NgModule({
  declarations: [
    BlogDetail
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SanityHtmlPipe
  ]
})
export class BlogsModule { }
