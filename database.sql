--create a database
CREATE DATABASE social_network;

--view the databse
\c social_network

--database tables
CREATE TABLE user(
    fname VARCHAR(255),
    lname VARCHAR(255),
    mname VARCHAR(255),
    email VARCHAR(255),
    picture VARCHAR(255),
    location VARCHAR(255),
    age int(255),
    status VARCHAR(255),
    gender VARCHAR(255),
    iuser_id BIGSERIAL primary key()
);