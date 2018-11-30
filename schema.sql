create table users(
    id serial primary key,
    name varchar(50) not null,
    email varchar(100) unique not null,
    password varchar(100) not null
);

create table accounts(
    id serial primary key,
    amount float,
    user_id integer references users (id)
);

create table incomes(
    id serial primary key,
    amount float,
    date timestamp,
    user_id integer references users (id),
    account_id integer references accounts (id)
);

create table expenses(
    id serial primary key,
    amount float,
    date timestamp,
    user_id integer references users (id),
    account_id integer references accounts (id)
);