import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./components/home/home-module').then(m => m.HomeModule),
    pathMatch: 'full' //
  },
  { 
    path: 'projects', 
    loadChildren: () => import('./components/projects/projects-module').then(m => m.ProjectsModule) 
  },
  { 
    path: 'blog', 
    loadChildren: () => import('./components/blogs/blogs-module').then(m => m.BlogsModule) 
  },
  
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
