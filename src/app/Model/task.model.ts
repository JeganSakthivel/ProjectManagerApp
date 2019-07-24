import { User } from 'src/app/Model/user.model';
import { Project } from 'src/app/Model/project.model';

export class Task {
   taskId: number;
   taskName: string;
   projectObject :Project
   projectId: number;
   projectName: string;
   status : String;
   IsParentTask: boolean;

  parentTaskId: number;
  parentTaskName: string;
  parentTaskObject : Task;
  
  userObject : User;
  userId: number;
  UserName: string;

  startDate: Date;
  endDate: Date;
  priority: number;
  completed: boolean;
}
