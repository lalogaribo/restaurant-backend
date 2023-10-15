USE restaurant;

CREATE TABLE Users(
    id int auto_increment primary key,
    name varchar(90),
    last_name varchar(90),
    email varchar(255) not null unique,
    address varchar(255),
    phone_number varchar(30) unique ,
    image varchar(255) null,
    password varchar(100) not null,
    created_at TIMESTAMP(0) not null,
    updated_at timestamp(0) not null
);