import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { ProjectDetail } from './project-detail/project-detail';

const routes: Routes = [
  { path: '', component: Projects },
  { path: ':slug', component: ProjectDetail },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
