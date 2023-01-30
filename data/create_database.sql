-- CREATE DATABASE IF NOT EXISTS testDB;
-- SELECT testDB;

CREATE TABLE locations (
	location_id varchar(255) NOT NULL,
	province varchar(255),
    district varchar(255),
    subdistrict varchar(255),
    zipcode int(5),
    latitude VARCHAR(255),
    longitude VARCHAR(255),
    primary key (location_id)
);


CREATE TABLE news ( 
	news_id char(15) NOT NULL,
    pubish_date datetime,
    news_source varchar(255),
    news_title varchar(255),
    news_intro mediumtext,
    news_description longtext,
    location_id varchar(255),
    primary key (news_id),
    foreign key (location_id) references locations(location_id)
);
