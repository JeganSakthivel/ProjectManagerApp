import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/Model/user.model';


declare var $: any; 

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  constructor(private userService : UserService) { }

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

 

  ngOnInit() {
    this.readAll();
    this.initialiseFormData();    
    //this.userObject = new User();
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
    this.userObject = new User();   
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
    this.userObject.firstName = this.userForm.get('firstName').value;
    this.userObject.lastName = this.userForm.get('lastName').value;
    this.userObject.employeId = this.userForm.get('employeId').value;

      this.userService.create(this.userObject)
      .subscribe(  (savedUserDetail : any) => {
          console.log(savedUserDetail);
          if(savedUserDetail && savedUserDetail.userId) {
            if(this.buttonText == "Update"){
              this.isUpdate = true;
            } else{
              this.isSaved = true;
            }
              this.readAll();
              
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
          this.resetForm();
        }
        
      );
    }

    closeSuccessModal() {
      $("#SucessMessageModal").modal('hide');
      this.isUpdate= false;
      this.isSaved=false;
      this.isDeleted=false;
    }

  editUserHandler(user : User){
    console.log("inside edit user handler ");
      this.buttonText = "Update"
      this.userObject = user;
       this.userForm.patchValue({
              firstName: user.firstName,
              lastName: user.lastName,
              employeId: user.employeId,
              userId: user.userId              
            });

      /*this.userService.getUserById(userId).subscribe (
          
          (response : any) => {
            console.log("Edit get User Detail" + response)
            this.userObject = response;
           // this.readAll();
            
          },
          err => console.log('HTTP Error', err),
          () => console.log('HTTP request completed.')
      ); */

  }

  deleteUserHandler(id){
    this.userService.delete(id)
        .subscribe( 
          (status)=> {
            console.log(status);
            if(status==200){
              console.log(status);
              this.isDeleted = true;
              this.readAll();
            }
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
