=======================================================
CREATE TABLE parent_tasks (
parent_task_id INT NOT NULL AUTO_INCREMENT,
parent_task_name VARCHAR(500) NOT NULL,
project_id INT NOT NULL,
PRIMARY KEY(parent_task_id),
FOREIGN KEY (project_id) REFERENCES PROJECTS (project_id)
);


CREATE TABLE projects (
	project_id INT NOT NULL AUTO_INCREMENT,
	project_name VARCHAR(50) NOT NULL,
	start_date VARCHAR(10) NULL DEFAULT NULL,
	end_date VARCHAR(10) NULL DEFAULT NULL,
	priority VARCHAR(2) NOT NULL,
	status VARCHAR(15) NULL DEFAULT NULL,
	manager_id INT NOT NULL,
	PRIMARY KEY (project_id),
	FOREIGN KEY (manager_id) REFERENCES users (USER_ID)
);

CREATE TABLE TASK (
TASK_ID INT NOT NULL AUTO_INCREMENT,
parent_task_id  INT,
PROJECT_ID INT,
task_name VARCHAR(500) NOT  NULL,
START_DATE DATE,
END_DATE DATE,
PRIORITY INT,
USER_ID INT,
STATUS VARCHAR(500),
PRIMARY KEY(TASK_ID),
FOREIGN KEY(PROJECT_ID) REFERENCES PROJECTS(PROJECT_ID),
FOREIGN KEY(parent_task_id ) REFERENCES PARENT_TASKS(parent_task_id ),
FOREIGN KEY(USER_ID) REFERENCES USERS(USER_ID)
);

CREATE TABLE USERS (
USER_ID INT NOT NULL AUTO_INCREMENT,
FIRST_NAME VARCHAR(500),
LAST_NAME  VARCHAR(500),
EMPLOYEE_ID INT,
status VARCHAR(100) NULL DEFAULT NULL,
PRIMARY KEY(USER_ID)
);



  insert into users (first_name, last_name,EMPLOYEE_ID, status) values('Jigu','bhai',12346,'enabled');


insert into projects (project_name, start_date, end_date, priority, status, manager_id) values('WTS','11/23/2018','11/25/2018','9','completed',1);