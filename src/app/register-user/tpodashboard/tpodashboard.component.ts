import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tpo } from 'src/app/models/tpo';
import { HttpTpoService } from 'src/app/service/http-tpo.service';

@Component({
  selector: 'app-tpodashboard',
  templateUrl: './tpodashboard.component.html',
  styleUrls: ['./tpodashboard.component.css']
})
export class TpodashboardComponent implements OnInit {
 tpo:Tpo;
 msg:string;
  constructor(private t:HttpTpoService ,private router:Router) {
    this.tpo=t.userValue;
   }

  ngOnInit(): void {
  }
  Logout(){
    this.t.tpologout();
  }
  drive(){
    this.router.navigate(["tpodrive"])
    sessionStorage.clear();    
  }

}
