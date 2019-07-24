import { User } from 'src/app/Model/user.model';

export class Project {
    projectId: number;
    projectName: string;
    managerId: number;
    //managerfirstName: string;
    //managerlastName: string;
    status : String
   userObject :User; 
   startDate: Date;
   endDate: Date;
   priority: number;  
   taskCount: number;
   completedTaskCount: number;
}
