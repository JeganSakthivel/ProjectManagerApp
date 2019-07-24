import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/Model/user.model';
import { Router } from '@angular/router';

declare var $: any; 

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  isDeleted : boolean = false;
  userForm: FormGroup;
  userObject : User ;
  isSaved : boolean  = false;
  isUpdate : boolean  = false;
  successMessage : String;
  userList : Object[];
  buttonText : String = "Add";
  field: string;
  order: number;
  searchText: string;
  error : String;

  constructor(private userService : UserService,private router: Router) { }

  ngOnInit() {
    this.initialiseFormData();
    this.readAll();
    this.userObject = new User();
    this.order = 1;  
  }

 
 
  

  initialiseFormData(){
    this.userObject = new User();
    this.userForm = new FormGroup({
      firstName: new FormControl("",Validators.compose([ Validators.required ])),
      lastName: new FormControl("", Validators.compose([ Validators.required ])),
      employeId: new FormControl("", Validators.compose([ Validators.required ]))
   });
  }

  readAll(){
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

  resetForm(){    
    this.searchText = "";
    this.field = "";
    this.order = 1;
    this.userForm.patchValue({
      firstName: "",
      lastName: "",
      employeId: ""
    });
    this.buttonText  = "Add";
  }

  newUserFormHandler(){
    console.log(this.userForm.value);
    if (this.userForm.invalid) {
      return;
    }
    
      this.userService.create(this.userForm.value)
      .subscribe(  (savedUserDetail : any) => {
          console.log(savedUserDetail);
          if(savedUserDetail && savedUserDetail.userId) {
            if(this.buttonText == "Update"){
              this.isUpdate = true;
            } else{
              this.isSaved = true;
            }
              this.readAll();
              this.resetForm();
          } else {
            this.isSaved = false;
            this.isUpdate = false;
          }
      },
      error => {
        this.error = "Error while saving the project";
        },
        () =>  { 
          $("#SucessMessageModal").modal('show');
          if(this.isUpdate == true) {
            this.successMessage = 'User Updated Successfully'; 
          } else if (this.isSaved == true) {
            this.successMessage = 'User Saved Successfully';  
          } else if ( this.isDeleted == true){
            this.successMessage = 'User deleted Successfully'; 
          }
        }
        
      );
    }

    closeSuccessModal() {
      $("#SucessMessageModal").modal('hide');
      this.isUpdate= false;
      this.isSaved=false;
      this.isDeleted=false;
    }

  editUserHandler(userId : number){
    console.log("inside edit user handler "+ userId);
      this.buttonText = "Update"
     
      this.userService.getUserById(userId).subscribe (
          
          (response : any) => {
            console.log("Edit get User Detail" + response)
            this.userObject = response;
            this.userForm.patchValue({
              firstName: this.userObject.firstName,
              lastName: this.userObject.lastName,
              employeId: this.userObject.employeId,
              userId: this.userObject.userId              
            });
            
            this.readAll();
            
          },
          err => console.log('HTTP Error', err),
          () => console.log('HTTP request completed.')
      ); 

  }

  deleteUserHandler(id){
    this.userService.delete(id)
        .subscribe( 
          (status)=> {
              console.log(status);
              this.isDeleted = true;
              this.readAll();
        },
        error => {
          this.error = "Error while saving the project";
          },
          () =>  { 
            $("#SucessMessageModal").modal('show');
            if ( this.isDeleted == true){
              this.successMessage = 'User deleted Successfully'; 
            }
          }
        
      );
  }

  sortBy(field: string) {
    this.field = field;
    this.order = this.order * (-1);
    return false;
  }

}
