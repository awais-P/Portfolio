import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetail } from './blog-detail/blog-detail';

const routes: Routes = [
  { 
    // This matches: /blog/:slug (e.g., /blog/my-first-post)
    path: ':slug', 
    component: BlogDetail 
  },
  // Optional: Redirect /blog to home if no slug is provided
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
