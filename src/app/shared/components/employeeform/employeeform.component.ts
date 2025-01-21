import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeSerService } from '../../services/employee-ser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatsnckService } from '../../services/matsnck.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.scss']
})
export class EmployeeformComponent implements OnInit {
  userForm!: FormGroup;
  isEditMode: boolean = false
  postid!: string

  constructor(private fb: FormBuilder, private _ser: EmployeeSerService,
    private _act: ActivatedRoute,
    private _router: Router, private _matsanck: MatsnckService
  ) { }

  ngOnInit(): void {
    this.creteuserform()
    this.postid = this._act.snapshot.params['postId']
    if (this.postid) {
      this.isEditMode = true
      this._ser.singlePostFetch(this.postid)
        .subscribe((res) => {
          this.userForm.patchValue(res)
        })
    }




  }
  onupdtae() {

    let updateObj = this.userForm.value
    console.log(updateObj)
    this._ser.updatePost(updateObj, this.postid)
      .subscribe((res) => {
        console.log(res)
        this._router.navigate(['home'])
        this._matsanck.matsancopen(`${updateObj.
          employeeName
          } is updated`)


      })

  }

  creteuserform() {
    this.userForm = this.fb.group({
      // Employee Details
      employeeName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10,15}$/)]],
      alternatePhone: ['', [Validators.pattern(/^\+?[0-9]{10,15}$/)]],
      designation: ['', Validators.required],
      managerL1: ['', Validators.required],
      managerL2: [''],
      managerL3: [''],
      status: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      dateOfLeaving: [''],

      // Account Details
      loginName: ['', [Validators.required, Validators.minLength(3)]],
      smtpPassword: ['', Validators.required],
      functionalRole: ['', Validators.required],
      company: ['', Validators.required],
      department: ['', Validators.required],
      region: ['', Validators.required],
      branch: ['', Validators.required],
      type: ['', Validators.required],
      userImage: ['', Validators.required],
      location: ['', Validators.required]
    });
  }
  onSubmit(): void {
    console.log(this.userForm);
    // console.log(this.userForm.value);


    let post = this.userForm.value
    this.userForm.reset()
    this._ser.ceratepost(post)
      .subscribe((res) => {
        console.log(res)
        this._router.navigate(['home'])
        this._matsanck.matsancopen(`${post.name} is created`)


      })

  }

}
