import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeSerService } from '../../services/employee-ser.service';
import { MatsnckService } from '../../services/matsnck.service';
import { MatdialogconfirmComponent } from '../matdialogconfirm/matdialogconfirm.component';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  postid!: string
  postObj!: any
  constructor(private _router: ActivatedRoute,
    private dialog: MatDialog,
    private _Ser: EmployeeSerService,
    private _router1: Router,
    private _matsanck: MatsnckService) { }

  ngOnInit(): void {
    this.postid = this._router.snapshot.params["postId"]
    this._Ser.singlePostFetch(this.postid)
      .subscribe((res) => {
        this.postObj = res
        this._matsanck.matsancopen(` See the Full deatils of ${this.postObj.employeeName} `)

      })
  }

  ondelete() {
    const dialogRef = this.dialog.open(MatdialogconfirmComponent, {
      width: '400px',
      data: {
        title: 'Delete Confirmation',
        message: 'Are you sure you want to delete this post?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this._Ser.ondelete(this.postid).subscribe((res) => {
          console.log(res);
          this._router1.navigate(['/home']);
          this._matsanck.matsancopen(`Sucessfully ${this.postObj.name} deleted `)

        });
      }
    });
  }

}
