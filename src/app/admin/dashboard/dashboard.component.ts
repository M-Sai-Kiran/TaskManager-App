import { Component, OnInit, Inject } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(DashboardService) private dashboardService:DashboardService) { }

  Designation:string;
  UserName:string;
  NoOfTeamMembers:number;
  TotalCostOfAllProjects:number;
  PendingTasks:number;
  UpcomingProjects:number;
  ProjectCost:number;
  CurrentExpenditure:number;
  AvailableFunds:number;
  Clients:string[];
  Projects:string[];
  Years:number[]=[];
  TeamMembersSummary=[];
  TeamMembers=[];
  CurrentProject:string;

  ngOnInit(): void {
    this.Designation="Team Leader";
    this.UserName="will smith";
    this.NoOfTeamMembers = 5;
    this.TotalCostOfAllProjects = 400;
    this.PendingTasks = 2;
    this.UpcomingProjects = 4;
    this.ProjectCost = 21400;
    this.CurrentExpenditure=10000;
    this.AvailableFunds=15000;
    this.Clients = ["ABC INFOTECH Ltd.","DEF Software Solutions","GHI Industries"];
    this.Projects = ["Project A","Project B","Project C","Project D","Project E"];
    this.CurrentProject="Project A";

    for(let i=2020;i>2009;i-=1) this.Years.push(i);

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = this.dashboardService.getTeamMembers();
  }

  changeProject($event){
    if($event.target.innerHTML == "Project A"){
      this.ProjectCost = 40000;
      this.CurrentExpenditure = 2000;
      this.AvailableFunds = 38000;
      this.CurrentProject="Project A";
    }
    else if($event.target.innerHTML == "Project B"){
      this.ProjectCost = 60000;
      this.CurrentExpenditure = 20000;
      this.AvailableFunds = 40000;
      this.CurrentProject="Project B";
    }
    else if($event.target.innerHTML == "Project C"){
      this.ProjectCost = 50000;
      this.CurrentExpenditure = 2000;
      this.AvailableFunds = 48000;
      this.CurrentProject="Project C";
    }
    else if($event.target.innerHTML == "Project D"){
      this.ProjectCost = 90000;
      this.CurrentExpenditure = 20000;
      this.AvailableFunds = 70000;
      this.CurrentProject="Project D";
    }
    else if($event.target.innerHTML == "Project E"){
      this.ProjectCost = 150000;
      this.CurrentExpenditure = 20000;
      this.AvailableFunds = 130000;
      this.CurrentProject="Project E";
    }
  }

}
