import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './shared/components/employee-dashboard/employee-dashboard.component';
import { EmployeeformComponent } from './shared/components/employeeform/employeeform.component';
import { EmployeeTableComponent } from './shared/components/employee-table/employee-table.component';
import { SinglePostComponent } from './shared/components/single-post/single-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { PagnotfoundComponent } from './shared/components/pagnotfound/pagnotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatdialogconfirmComponent } from './shared/components/matdialogconfirm/matdialogconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    EmployeeformComponent,
    EmployeeTableComponent,
    SinglePostComponent,
    PagnotfoundComponent,
    MatdialogconfirmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
