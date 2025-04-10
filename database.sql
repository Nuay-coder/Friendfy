create database webdev;
use webdev;

create table Admin_info (
	admin_id int primary key auto_increment,
    fname varchar(20) not null,
    lname varchar(20) not null,
    city varchar(50),
    country varchar(50) not null,
    pincode int,
    birth_date date not null,
    email varchar(100) not null,
    gender varchar(10) not null
);

create table Admin_login (
	username varchar(50) not null,
    password varchar(50) not null,
    role enum('System Admin', 'User Admin', 'Content Admin', 'Moderator', 'Admin Assistant') not null,
    login_time time not null,
    admin_id int,
    foreign key (admin_id) references Admin_info(admin_id)
);

create table User (
	user_id int primary key auto_increment,
	display_name varchar(20) not null,
    password varchar(50) not null,
    fname varchar(20) not null,
    lname varchar(20) not null,
    birth_date date not null,
    email varchar(100) not null,
    gender varchar(10) not null,
    phone_number varchar(10) not null,
    u_location varchar(100)
);

create table Events (
	event_id int primary key,
    e_name varchar(20) not null,
    e_date date not null,
    e_location varchar(100),
    e_status enum('Avaliable', 'Full', 'Canceled') not null,
    participant int,
    e_category varchar(50)
);

create table Reservation (
	reservation_id int primary key auto_increment,
    r_name varchar(20) not null,
    r_date date not null,
    start_time time not null, 
    end_time time not null,
    r_status enum('Pending', 'Confirmed', 'Canceled', 'Completed') not null,
    r_category varchar(50),
    user_id int,
    foreign key (user_id) references User(user_id)
);

create table Complaints (
	complain_id int primary key,
    c_date date not null,
    c_category varchar(50),
    user_id int,
    foreign key (user_id) references User(user_id)
);
