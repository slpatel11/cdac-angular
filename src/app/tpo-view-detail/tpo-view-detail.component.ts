import { Component, OnInit } from '@angular/core';
import { Company, Drive, JobDetail } from '../models/comany';
import { HttpDriveService } from 'src/app/service/htpp-drive.service';
import { HttpCompanyService } from 'src/app/service/http-company.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpJobDetailService } from '../service/http-job-detail.service';
@Component({
  selector: 'app-tpo-view-detail',
  templateUrl: './tpo-view-detail.component.html',
  styleUrls: ['./tpo-view-detail.component.css']
})
export class TpoViewDetailComponent implements OnInit {
  drive=new Drive();
  id:number;
  jobs:Observable<JobDetail[]>;
  company:Company;
  constructor(private d:HttpDriveService,private router:Router,private c:HttpCompanyService,private j:HttpJobDetailService) { 
    this.id=parseInt(sessionStorage.getItem('driveId'));
    this.d.getDriveDetail(this.id).subscribe(val=>this.drive=val);
    this.jobs=this.j.getalljobForDrive(this.id);
  }

  ngOnInit(): void {
  }
  verifiedJob(){
    this.d.updateDriveDetailStatus(this.drive).subscribe(ResponseData=> {
      console.log("response recived");
      this.router.navigate(['tpodrive']);
    },error => {
      console.log("error occure");
  });
  }
  Logout(){
    this.router.navigate(['tpodrive']);
    sessionStorage.removeItem("driveId");
  }
}
