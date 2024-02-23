import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { InfoComponent } from './shared/components/info/info.component';
import { EducationComponent } from './shared/components/education/education.component';
import { DataComponent } from './shared/components/data/data.component';

const routes: Routes = [
  {
    path : "home", component : DashboardComponent
  },
  {
    path : "profile", component : AboutUsComponent
  },
  {
    path : "skill", component : InfoComponent
  },
  {
    path : "education", component : EducationComponent
  },
  {
    path : "data",  redirectTo:"DataComponent"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
