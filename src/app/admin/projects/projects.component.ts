import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Projects } from 'src/app/projects';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:Projects[];
  newProject:Projects = new Projects();
  @ViewChild('newForm') newForm:NgForm;

  constructor(private projectsService:ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(
      (response:Projects[])=>{
        this.projects = response;
      }
    )
  }

  onSaveClick(){
    if(this.newForm.valid){
      this.projectsService.insertProject(this.newProject).subscribe(
        (response:Projects)=> {
          this.projects.push(response)
          this.newProject.ProjectId=0;
          this.newProject.ProjectName='';
          this.newProject.TeamSize=0;
        },
        (error)=>{console.log(error)}
      )
    }
    
  }

  onCancelClick(){
    this.newForm.resetForm();
  }
  updateProject(){
    this.projectsService.updateProject(this.newProject).subscribe((response)=>{
      
    },(err)=>{console.log(err)})
  }
}
