import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../service/project.service';
import { Project } from '../Model/project.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { UserService } from '../service/user.service';
import { User } from 'src/app/Model/user.model';

declare var $: any; 

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService:ProjectService, private userService: UserService) { }

  title: string;
  buttonText: string;
  project: Project;
  projectsList : Object[];
  userList : Object[];
  projectForm: FormGroup;
  error: string;
  actionClicked: boolean;
  startDateRequired: boolean
  endDateRequired: boolean
  startDateGreater: boolean
  managerId: number;
  isManagerSelected : boolean = false;
  isUpdate : boolean = false;
  isSaved: boolean = false;
  isSuspended: boolean = false;
  submitted: boolean = false;
  successMessage : String;
  field: string;
  order: number;

 // public properties: string[] = ["projectName", "startDate", "endDate", "priority", "taskCount", "status"]

  ngOnInit() {
    this.getProjects();
    this.initializeFormControl();
    this.order = 1;
  }

  getProjects(){
    this.projectService.readAll()
            .subscribe( 
              (response : any) => {
                console.log(response);
                this.projectsList = response;
              },
              err => console.log('HTTP Error', err),
             () => console.log('getProjects completed.')  

            );
  }

  resetForm() {
    this.buttonText = "Add";
    this.field="";
    this.project = new Project();
    this.managerId = 0;
    this.startDateRequired = false;
    this.endDateRequired = false;
    this.startDateGreater = false;
    this.submitted = false;
    this.successMessage ='';
    this.isUpdate = false;
    this.isSaved = false;
    this.isSuspended = false;

    this.projectForm.patchValue({
      projectName: '',
      managerId: '',
      Manager: '',
      priority: 0,
      startDate: null,
      endDate: null,
      userObject : null
    });
  }

  initializeFormControl() {

    this.project = new Project();

    // new object
    this.projectForm = new FormGroup({
      projectName: new FormControl('', Validators.required),
      Manager: new FormControl('', Validators.required),
      priority: new FormControl(0, Validators.min(1)),
      DateRequired: new FormControl(false),
      startDate: new FormControl({ value: null, disable: true }),
      endDate: new FormControl({ value: null, disable: true })
    });

    this.toggleDate();

    this.buttonText = "Add";
  }

  toggleDate() {

    this.startDateRequired = false;
    this.endDateRequired = false;
    this.startDateGreater = false;

    let dateRequired = this.projectForm.controls['DateRequired'].value;

    if (dateRequired) {
      let today = new Date();
      let todayplus1 = new Date();
      todayplus1.setDate(today.getDate() + 1);

      this.projectForm.patchValue({
        startDate: formatDate(today, 'yyyy-MM-dd', 'en-US'),
        endDate: formatDate(todayplus1, 'yyyy-MM-dd', 'en-US')
      })

      this.projectForm.controls['startDate'].enable();
      this.projectForm.controls['endDate'].enable();
    }
    else {
      this.projectForm.patchValue({
        startDate: new FormControl({ value: null }),
        endDate: new FormControl({ value: null })
      })
      this.projectForm.controls['startDate'].disable();
      this.projectForm.controls['endDate'].disable();
    }
  }

  newprojectFormHandler() {
    this.submitted = true;
    this.startDateRequired = false;
    this.endDateRequired = false;
    
    if (this.projectForm.invalid) {
      return;
    }

    this.project.projectName = this.projectForm.get('projectName').value;
    this.project.managerId = this.managerId;
    this.project.priority = this.projectForm.get('priority').value;

    let dateRequired = this.projectForm.controls['DateRequired'].value;
    let startDate = this.projectForm.get('startDate').value
    let endDate = this.projectForm.get('endDate').value

    if (dateRequired || startDate!=null || endDate!=null) {

      

      if (startDate == null || startDate == undefined || startDate == "") {
        this.startDateRequired = true;
      }

      if (endDate == null || endDate == undefined || endDate == "") {
        this.endDateRequired = true;
      }

      if (this.startDateRequired || this.endDateRequired) {
        return;
      }

      if (startDate > endDate) {
        this.startDateGreater = true;
        return;
      }

      this.project.startDate = this.projectForm.get('startDate').value;
      this.project.endDate = this.projectForm.get('endDate').value;
    }
    else {
      this.project.startDate = null;
      this.project.endDate = null;
    }


    
    this.userService.getUserById(this.project.managerId ).subscribe (
          
      (response : any) => {
        console.log("Get User Detail" + response)
        this.project.userObject = response;
        this.saveProject(this.project);
        

      },
      err => console.log('Error while geting user', err),
      () => { 
        console.log('HTTP User request completed.')
        
      }
  ); 
    return;
  }


  saveProject(project:Project){
    this.projectService.saveProject(project).subscribe(result => {
      console.log("save project result - ",result);
        
       if(this.buttonText == "Update"){
          this.isUpdate = true;
        } else{
          this.isSaved = true;
        }
        // reload the table
        this.getProjects();
        
       }, 
       error => {
      this.error = "Error while saving the project";
      },
      () =>  { 
        $("#SucessMessageModal").modal('show');
        if(this.isUpdate == true) {
          this.successMessage = 'Project Updated Successfully'; 
        } else if (this.isSaved == true) {
          this.successMessage = 'Project Saved Successfully';  
        } else if ( this.isSuspended == true){
          this.successMessage = 'Project suspended Successfully'; 
        }
      }
    );
  }

  closeSuccessModal() {
    $("#SucessMessageModal").modal('hide');
    this.isUpdate= false;
    this.isSaved=false;
    this.isSuspended=false;
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
    this.projectForm.patchValue({
      Manager: user.lastName + ", " + user.firstName
    })
    this.managerId = user.userId;
    this.isManagerSelected = true;
  }
  console.log("selected manager id " , this.managerId);

  setTimeout(()=>{
    $("#showUsersModal").modal('hide');
  },1000);
}

editProject(id: number) {
  
  this.title = "Edit Project";
  this.buttonText = "Update";
  this.projectService.getProjectById(id).subscribe(result => {

    this.project = result;

    let startDate = new Date(this.project.startDate);
    let endDate =  new Date(this.project.endDate);

    this.projectForm.patchValue({
      projectName: this.project.projectName,
      Manager: this.project.userObject.lastName + ", " + this.project.userObject.firstName,
      priority: this.project.priority,
      //startDate: this.project.startDate,
      //endDate: this.project.endDate,
      startDate: formatDate(startDate, 'yyyy-MM-dd', 'en-US'),
      endDate: formatDate(endDate, 'yyyy-MM-dd', 'en-US'),
      userObject : this.project.userObject,
      managerId : this.project.userObject.userId

    });

    /* this.projectForm.patchValue({
      DateRequired: this.project.startDate != null
    });*/
    if(this.project.startDate!=null) {
      this.projectForm.controls['startDate'].enable();
    }
    if(this.project.endDate!=null) {
      this.projectForm.controls['endDate'].enable();
    }
    

    this.managerId = this.project.userObject.userId;

    //this.toggleDate();
  });
}

suspendProject(id: number) {

  this.projectService.getProjectById(id).subscribe(result => {

    this.project = result;
    this.project.status = "completed";
    this.isSuspended = true;
    // suspend the project on confirmation
    this.saveProject(this.project);
  });
     
}

reset() {
  this.resetForm();
}

sortBy(field: string) {
  this.field = field;
  this.order = this.order * (-1);
  return false;
}

}


