import { Component, OnInit } from '@angular/core';
import { EmployeeSerService } from '../../services/employee-ser.service';
import { MatdialogconfirmComponent } from '../matdialogconfirm/matdialogconfirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  postarr!: any
  constructor(private _service: EmployeeSerService,private dialog: MatDialog,) { }

  ngOnInit(): void {
    this._service.fetchproducts()
      .subscribe((res => {
        console.log(res)
        this.postarr=res
        console.log(this.postarr);

      }))
  }

 

}
