import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentsDashboardComponent } from './students-dashboard/students-dashboard.component';
import { StudentsDataService } from './students-data.service';
import { SchoolAdmissionFormComponent } from './school-admission-form/school-admission-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StudentsDashboardComponent,
    SchoolAdmissionFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentsDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
