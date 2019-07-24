import { Component, OnInit } from '@angular/core';
import { TaskService} from 'src/app/service/task.service';
import { Task } from 'src/app/Model/task.model';
import { Project } from 'src/app/Model/project.model';
import { User } from 'src/app/Model/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService} from 'src/app//service/project.service';
import { from } from 'rxjs';
import { UserService } from 'src/app/service/user.service';


declare var $: any; 


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  constructor(private taskService: TaskService, private activatedRoute : ActivatedRoute,
    private route: Router,private projectService: ProjectService, private userService: UserService) { }

  isEdit: boolean;
  title: string;
  buttonText: string;
  resetText : string;
  Task: Task;
  projectList : Object[];
  userList : Object[];
  parentTaskList : Object[];
  taskForm: FormGroup;
  submitted: boolean = false;
  isProjectSelected : boolean = false;
  isUserSelected : boolean = false;
  isparentTaskSelected : boolean = false;
  isDisabled : boolean = false;
  IsParentTask : boolean = false ;
  isUpdate : boolean = false;
  status: boolean;
  error: string;
  successMessage : string;
  isSaved: boolean = false;
  

  projectId: number;
  parentTaskId: number;
  userId: number;
  priority : number;

  startDateRequired: boolean;
  endDateRequired: boolean;
  startDateGreater: boolean;
  userRequrired: boolean;
  priorityRequired: boolean;
  userRequired: boolean;

  ngOnInit() {
    this.initializeFormControl();

    this.isEdit = false;

    // for edit
    this.activatedRoute.params.subscribe(params => {
      if (params != null) {
        let taskId = params['id'];

        if (taskId != null && taskId != undefined) {
          this.Task.taskId = taskId;
          this.editTask(this.Task.taskId);
        }
      }
    })
  }

  initializeFormControl() {
    
    this.Task = new Task();

    // new object
    this.taskForm = new FormGroup({
      Project: new FormControl('', Validators.required),
      taskName: new FormControl('', Validators.required),
      IsParentTask: new FormControl(false),
      ParentTask: new FormControl({ value: null, disable: true }),
      priority: new FormControl({ value: 0, disable: true }),
      startDate: new FormControl({ value: null, disable: true }),
      endDate: new FormControl({ value: null, disable: true }),
      User: new FormControl({ value: null, disable: true }),
    });

    this.addProject();
    this.onParentTaskChange();
  }

  editTask(id: number) {

    this.title = "Edit Task";
    this.isEdit = true;
    this.buttonText = "Update";
    this.resetText = "Cancel";
    //this.isDisabled = true;
    

    this.taskService.getTasksById(id).subscribe(result => {

      this.Task = result;

      this.taskForm.patchValue({
        Project: this.Task.projectObject.projectName,
        taskName : this.Task.taskName,
        Task: this.Task.taskName,
        IsParentTask: this.Task.IsParentTask,

        ParentTask: this.Task.parentTaskObject.parentTaskName,
        priority: this.Task.priority,
        startDate: this.Task.startDate,
        endDate: this.Task.endDate,
        User: this.Task.userObject.lastName + ", " + this.Task.userObject.firstName
      });

      this.priority = this.Task.priority;
      //this.parentTaskId = this.Task.parentTaskId;
      //this.userId = this.Task.userId;

      //this.onParentTaskChange();

      // on edit mode, not allow to change the parent flag
      //let isParentTask = this.taskForm.controls['IsParentTask'].value
      
      this.taskForm.controls['IsParentTask'].disable();
      this.taskForm.controls['ParentTask'].disable();
      this.IsParentTask = false;
    });
  }

  onParentTaskChange() {

    this.startDateRequired = false;
    this.endDateRequired = false;
    this.startDateGreater = false;

    let isParentTask = this.taskForm.controls['IsParentTask'].value;

    if (!isParentTask) {
      this.IsParentTask = false;
      let today = new Date();
      let todayplus1 = new Date();
      todayplus1.setDate(today.getDate() + 1);

      this.taskForm.patchValue({
        startDate: formatDate(today, 'yyyy-MM-dd', 'en-US'),
        endDate: formatDate(todayplus1, 'yyyy-MM-dd', 'en-US')
      })

      this.taskForm.controls['startDate'].enable();
      this.taskForm.controls['endDate'].enable();
      this.taskForm.controls['priority'].enable();
      this.taskForm.controls['ParentTask'].enable();
      this.taskForm.controls['User'].enable();
    }
    else {
      // parent task flow      
      this.taskForm.patchValue({
        startDate: new FormControl({ value: null }),
        endDate: new FormControl({ value: null }),
        ParentTask: '',
        priority: 0,
        User: '',
      })
      
      this.userId = 0;
      this.parentTaskId = 0;
      this.IsParentTask = true;
      this.taskForm.controls['startDate'].disable();
      this.taskForm.controls['endDate'].disable();
      this.taskForm.controls['priority'].disable();
      this.taskForm.controls['ParentTask'].disable();
      this.taskForm.controls['User'].disable();
      
    }
  }

  resetForm() {
    this.Task = new Task();
    this.projectId = 0;
    this.parentTaskId = null;
    this.isUpdate = false;
    this.userId = 0;
    this.startDateRequired = false;
    this.endDateRequired = false;
    this.startDateGreater = false;
    this.userRequrired = false;
    this.isDisabled = false;
    this.isSaved = false;
    this.IsParentTask = false;
    
    this.taskForm.patchValue({
      Project: '',
      taskName: '',
      IsParentTask: false,
      ParentTask: '',
      priority: 0,
      startDate: null,
      endDate: null,
      User: ''
    });
  }

  addProject() {
    this.resetForm();
    this.title = "Add Task";
    this.buttonText = "Add";
    this.resetText = "Reset" ;
    this.onParentTaskChange();
  }
  onRangeValueChange(event: any) {
    const value = event.value;
    this.priority = value;
  }

  newtaskFormHandler() {
    this.submitted = true;
    this.startDateRequired = false;
    this.endDateRequired = false;
    this.priorityRequired = false;
    this.startDateGreater = false;
    this.userRequired = false;

    if (this.taskForm.invalid) {
      return;
    }

    let isParentTask = this.taskForm.controls['IsParentTask'].value;

    this.Task.projectName = this.taskForm.get('Project').value;
    this.Task.projectId = this.projectId;
    this.Task.taskName = this.taskForm.get('taskName').value;
    this.Task.IsParentTask = isParentTask;

    if (!isParentTask) {

      let startDate = this.taskForm.get('startDate').value
      let endDate = this.taskForm.get('endDate').value
      let priority = this.taskForm.get('priority').value
      let user = this.taskForm.get('User').value

      this.priority = this.taskForm.get('priority').value;
      if (startDate == null || startDate == undefined || startDate == "") {
        this.startDateRequired = true;
      }

      if (endDate == null || endDate == undefined || endDate == "") {
        this.endDateRequired = true;
      }

      if (priority == null || priority == undefined || priority == "" || priority == 0) {
        this.priorityRequired = true;
      }

      if (user == null || user == undefined || user == "") {
        this.userRequired = true;
      }

      if (this.startDateRequired || this.endDateRequired
        || this.priorityRequired || this.userRequired) {
        return;
      }

      if (startDate > endDate) {
        this.startDateGreater = true;
        return;
      }

      this.Task.startDate = this.taskForm.get('startDate').value;
      this.Task.endDate = this.taskForm.get('endDate').value;
      this.Task.priority = this.taskForm.get('priority').value;
      this.Task.UserName = this.taskForm.get('User').value;;

      this.Task.userId = this.userId;
      this.Task.parentTaskId = this.parentTaskId;

      this.taskService.saveTask(this.Task).subscribe(result => {

        if (result) {
          if(this.buttonText == "Update"){
            this.isUpdate = true;
          } else{
            this.isSaved = true;
          }
         
        }
        else {
          this.error = "Error while saving the task";
        }
      }, error => {
        this.error = "Error while saving the task";
      },
      () =>  { 

        $("#SucessMessageModal").modal('show');
        if(this.isUpdate == true) {
          this.successMessage = 'Task Updated Successfully'; 
        } else if (this.isSaved == true) {
          this.successMessage = 'Task Saved Successfully';  
        }
      }
      );
    }
    else { //parent task flow 

      this.Task.startDate = null;
      this.Task.endDate = null;
      this.Task.priority = null;
      //this.Task.parentTaskId = null;
      this.Task.parentTaskName = this.Task.taskName;
      this.Task.userId = null;

      this.taskService.saveParentTask(this.Task).subscribe(result => {

        if (result) {
          this.isSaved = true;
          //this.route.navigate(['/task']);
        }
        else {
          this.error = "Error while saving the parent task";
        }
      }, error => {
        this.error = "Error while saving the parent task";
      });
    }

   
    
    return;
  }

  closeSuccessModal() {
    $("#SucessMessageModal").modal('hide');
    this.isUpdate= false;
    this.isSaved=false;
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
    this.taskForm.patchValue({
      Project: project.projectName
    })
    this.projectId = project.projectId;
    this.Task.projectObject = project;
    this.isProjectSelected = true;
    
  }
  console.log("selected project id " , this.projectId);

  setTimeout(()=>{
    $("#showProjectModal").modal('hide');
    this.isProjectSelected=false;
  },1000);
}

searchUserPopup(){
  $("#showUsersModal").modal('show');

    this.userService.readAll()
    .subscribe( 
      (response : any) => {
        console.log(response);
        this.userList = response;
      },
      err => console.log('HTTP Error', err),
     () => console.log('HTTP request completed.')  

    );
}

selectUser(user:User){

  if(user!=null) {
  this.taskForm.patchValue({
    User: user.lastName + ", " + user.firstName
  })
  this.userId = user.userId;
  this.Task.userObject = user;
  this.isUserSelected = true;  
}

console.log("selected project id " , this.projectId);

  setTimeout(()=>{
    $("#showUsersModal").modal('hide');
  },1000);
  this.isUserSelected = false;  
}

searchParentTaskPopup(){
  $("#showParentTaskModal").modal('show');

  this.taskService.getParentTasks()
  .subscribe( 
    (response : any) => {
      console.log(response);
      this.parentTaskList = response;
    },
    err => console.log('HTTP Error', err),
   () => console.log('HTTP request completed.')  

  );
}

selectParentTask(parentTask:Task){

  if(parentTask!=null) {
  this.taskForm.patchValue({
    ParentTask: parentTask.parentTaskName
  })
  this.Task.parentTaskId = parentTask.parentTaskId;
  this.Task.parentTaskName = parentTask.parentTaskName;
  this.Task.parentTaskObject = parentTask;
  this.isparentTaskSelected = true;  
}

console.log("selected parent task id " , this.Task.parentTaskId);

  setTimeout(()=>{
    $("#showParentTaskModal").modal('hide');
  },1000);
  this.isparentTaskSelected = false; 
}

reset(){
  this.resetForm();
  if(this.resetText == "Cancel"){
    this.route.navigate(['/ViewTask']);
  }
}

}
