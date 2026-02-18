import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing-module';
import { Projects } from './projects/projects';
import { SharedModule } from '../../shared/shared-module';
import { ProjectDetail } from './project-detail/project-detail';


@NgModule({
  declarations: [
    Projects,
    ProjectDetail,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
