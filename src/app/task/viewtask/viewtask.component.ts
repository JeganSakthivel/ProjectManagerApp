import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Model/task.model';
import { Project } from 'src/app/Model/project.model';
import { TaskService} from 'src/app/service/task.service';
import { ProjectService} from 'src/app//service/project.service';
import { Router } from '@angular/router';

declare var $: any; 

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  constructor(private taskService: TaskService, private projectService: ProjectService, private route : Router) { }

  projectList : Object[];
  Tasks : Object[];
  Project: string;
  projectId: number;
  isProjectSelected : boolean = false;
  Task: Task;
  error : String;
  iscompleteTask : boolean = false;
  field: string;
  order: number ;
  successMessage : String;

  ngOnInit() {
    this.order = 1;
  }

  getTasks() {
    this.taskService.getTasks().
    subscribe(result => {
      this.Tasks = result
    },
    err => console.log('HTTP Error', err),
    () => console.log('HTTP request completed.') 
   );
  }

  searchProjectPopup(){
    $("#showProjectModal").modal('show');

    this.projectService.readAll()
    .subscribe( 
      (response : any) => {
        console.log(response);
        this.projectList = response;
      },
      err => console.log('HTTP Error', err),
     () => console.log('HTTP request completed.')  

    );

  }

  selectProject(project:Project){

    if(project!=null) {
    
    this.Project = project.projectName;
    this.projectId = project.projectId;
   // this.Task.projectObject = project;
    this.isProjectSelected = true;

    this.taskService.getTasksByProjectId(this.projectId).subscribe(result =>
      this.Tasks = result, error => console.error(error));
    
  }
  console.log("selected project id " , this.projectId);

  setTimeout(()=>{
    $("#showProjectModal").modal('hide');
    this.isProjectSelected=false;
  },1000);
}

completeTask(task: Task) {
  task.status = "Completed";
  this.taskService.saveTask(task).subscribe(result => {

    if (result) {
      // reload the table
      this.taskService.getTasksByProjectId(this.projectId).subscribe(result => {
        this.Tasks = result
        this.successMessage = task.taskName + "is completed" ;
        $("#SucessMessageModal").modal('show');
      },
      error => console.error(error)
    );
     
    }
    else {
      this.error = "Error while saving the task";
    }
  }, error => {
    this.error = "Error while saving the task";
  });
}

closeSuccessModal() {
    $("#SucessMessageModal").modal('hide');
  }

editTask(id: number) {
  //this.route.navigate(['/edittask/' + id]);
  this.route.navigate(['edittask', id]);
}

sortBy(field: string) {
  this.field = field;
  this.order = this.order * (-1);
  return false;
}


}
