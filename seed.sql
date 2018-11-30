insert into users
  (name, email, password)
  values
  ('lorenzo', 'lorenzo@mail.com', '$2b$10$11ephGjP.SYPib.5fbfSrObvjqbC0.6jK/Lvv9S5rRC2YgPTn1R1O');

insert into accounts
  (amount, user_id)
  values
  (1000, 1);

insert into incomes
  (amount, date, user_id)
  values
  (100, '2018-11-30', 1),
  (150, '2018-11-30', 1);

insert into expenses
  (amount, date, user_id)
  values
  (20, '2018-11-30', 1),
  (350, '2018-11-30', 1);

