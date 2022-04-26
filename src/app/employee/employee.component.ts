import { Component } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  firstName: string = 'Praveen';
  lastName: string = 'Nishad';
  gender: string = 'Male';
  age: number = 30;
}
