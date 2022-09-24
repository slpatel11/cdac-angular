import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/user';
import { HttpStudentService } from 'src/app/service/http-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-status',
  templateUrl: './student-status.component.html',
  styleUrls: ['./student-status.component.css']
})
export class StudentStatusComponent implements OnInit {
  student=new Student();
  msg:string;
  constructor(private s:HttpStudentService,private  router:  Router) {
    this.student=this.s.userValue;
   }

  ngOnInit(): void {

  }
Logout(){
  this.router.navigate(["studentdashboard"]);
}
}
