import { Component, OnInit } from '@angular/core';
import { Company, Drive, JobDetail } from '../models/comany';
import { HttpDriveService } from 'src/app/service/htpp-drive.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tpo } from '../models/tpo';
import { HttpTpoService } from '../service/http-tpo.service';

@Component({
  selector: 'app-tpo-drive',
  templateUrl: './tpo-drive.component.html',
  styleUrls: ['./tpo-drive.component.css']
})
export class TpoDriveComponent implements OnInit {
  drives:Observable<Drive[]>;
  id:number;
  dr=new Drive();
  jobId:number;
tpo:Tpo;
  constructor(private router:Router,private ds:HttpDriveService,private t:HttpTpoService) { 
    this.drives=this.ds.getalldrive();
  }

  ngOnInit(): void {
  }
  Logout(){
    this.router.navigate(['tpodashboard'])
  
  }
  viewJob(id:string){
    sessionStorage.setItem('driveId',id);
    this.router.navigate(["tpoviewdetail"])
  }
}
