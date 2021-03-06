import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { FormelementComponent } from './formelement/formelement.component';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EmployeeComponent,
    FormelementComponent,
    EmployeeListComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
