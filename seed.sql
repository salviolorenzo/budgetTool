insert into users
  (name, email, password)
  values
  ('lorenzo', 'lorenzo@mail.com', '$2b$10$11ephGjP.SYPib.5fbfSrObvjqbC0.6jK/Lvv9S5rRC2YgPTn1R1O');

insert into accounts
  (amount, user_id)
  values
  (1000, 1);

insert into incomes
  (amount, description, date, user_id)
  values
  (100, 'sold stuff', '2018-11-30', 1),
  (150, 'sold my soul', '2018-11-30', 1);

insert into expenses
  (amount, description, date, user_id)
  values
  (20, 'bought some things', '2018-11-30', 1),
  (350, 'bought other things', '2018-11-30', 1);

