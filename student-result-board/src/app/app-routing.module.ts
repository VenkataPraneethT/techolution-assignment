import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { SchoolAdmissionFormComponent } from './school-admission-form/school-admission-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/students-results', pathMatch: 'full'  },
  { path: 'students-results', component: StudentsDashboardComponent },
  { path: 'school-admission-form', component: SchoolAdmissionFormComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
