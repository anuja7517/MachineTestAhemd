import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  @Input() employeeData!:any
  constructor() { }

  ngOnInit(): void {
  }

}
