import { Component, OnInit } from '@angular/core';
import { Hod } from 'src/app/models/hod';
import { HttpHodService } from 'src/app/service/http-hod.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hoddashboard',
  templateUrl: './hoddashboard.component.html',
  styleUrls: ['./hoddashboard.component.css']
})
export class HoddashboardComponent implements OnInit {
   hod:Hod;
   msg:string;
  constructor(private h:HttpHodService,private router:Router) {
    this.hod=h.userValue;
   }
  
  ngOnInit(): void {
  }
  drive(){
    this.router.navigate(["tpodrive"])
    sessionStorage.clear();
  }
  record(){

  }
  Logout(){
    this.h.hodlogout();
  }
}
