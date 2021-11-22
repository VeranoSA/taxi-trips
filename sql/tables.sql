create table routename(
	id serial not null primary key,
	city text not null,
    price decimal(10,2)
);

create table taxi(
	id serial not null primary key,
	regnumber varchar(255) not null,
);

create table region (
	id serial not null primary key,
	name text not null
);

create table trip (
	id serial not null primary key,
    qty int not null,
	routename_id int,
	taxi_id int,
	foreign key (routename_id) references routename(id),
	foreign key (taxi_id) references taxi(id)
);

insert into region(id, name) values (1, 'Durban');
insert into region(id, name) values (2, 'Cape Town');
insert into region(id, name) values (3, 'Gauteng');

insert into routename(id, city, price) values (1, 'Cape Town - Bellville', 15.00);
insert into routename(id, city, price) values (2, 'Cape Town - Gugulethu', 20.00);
insert into routename(id, city, price) values (3, 'Cape Town - Langa', 25.00);
insert into routename(id, city, price) values (1, 'Sandton - Randburg', 30.00);
insert into routename(id, city, price) values (2, 'Alexandra - Sandton', 35.00);
insert into routename(id, city, price) values (3, 'Sandton - Midrand', 40.00);
insert into routename(id, city, price) values (1, 'Umlazi - Durban Central', 45.00);
insert into routename(id, city, price) values (2, 'Durban Central - Umhlanga Rocks', 50.00);
insert into routename(id, city, price) values (3, 'Durban Central - Umbilo', 55.00);