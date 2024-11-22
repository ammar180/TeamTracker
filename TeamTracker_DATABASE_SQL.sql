CREATE TABLE Project
(
	 project_code int IDENTITY(1000, 1),
	 project_name varchar(100),

	 primary key(project_code)
);

CREATE TABLE [User]
(
	[user_ID] int IDENTITY(1, 1),
	[user_name] varchar(100) unique,
	public_username varchar(100),
	email varchar(200) unique,
	user_password varchar(50),
	profileIcon_URL varchar(1000),
	birth_date date,

	primary key(user_ID)
);

CREATE TABLE project_member
(
	[user_ID] int,
	project_code int,
	member_role varchar(100),

	foreign key(project_code) references Project,
	foreign key([user_ID]) references [User],
	
	primary key([user_ID], project_code)
);

CREATE TABLE Phase
(
	PH_ID int IDENTITY(1, 1),
	
	project_ID int,
	pairant_PH int,
	
	phase_name varchar(100),
	ph_description varchar(1000),

	[start_date] date,
	end_date date,

	primary key(PH_ID),
	foreign key(project_ID) references Project,
	foreign key(pairant_PH) references Phase,
);

CREATE TABLE Task
(
	task_ID int IDENTITY(1, 1),
	ph_ID int,
	member_id int,

	task_name varchar(100),
	details varchar(500),

	[start_date] datetime,
	end_date datetime,

	primary key(task_ID),
	foreign key(ph_ID) references Phase,
);

CREATE TABLE task_member
(
	[user_ID] int,
	task_ID int,

	foreign key([user_ID]) references [User],
	foreign key(task_ID) references Task,

	primary key([user_ID], task_ID)
);

CREATE TABLE materials
(
	material_ID int IDENTITY(1, 1),
	ph_ID int,
	task_ID int,

	materials_URL varchar(1000),

	primary key(material_ID),

	foreign key(ph_ID) references phase,
	foreign key(task_ID) references Task,
);