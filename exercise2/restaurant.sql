-- create database restaurant;

-- \c restaurant;

-- CREATE TABLE restaurant (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR(30) NOT NULL,
--   distance INTEGER,
--   stars INTEGER,
--   category VARCHAR(10),
--   favorite VARCHAR(20),
--   takeout BOOLEAN,
--   last_visit date
-- );

-- INSERT INTO restaurant VALUES (
--   DEFAULT, 'Benihana', 17, 5, 'Japanese', 'Grilled Shrimp', FALSE, '2-17-2018'
-- );
-- INSERT INTO restaurant VALUES (
--   DEFAULT, 'True Food Kitchen', 4, 3.5, 'Veggie', 'Grilled Salmon', TRUE, '3-17-2018'
-- );
-- INSERT INTO restaurant VALUES (
--   DEFAULT, 'Local Foods', 3, 3, 'Veggie', 'Avocado Toast', TRUE, '3-26-2018'
-- );

-- select * from restaurant where stars = 5;

-- select favorite from restaurant where stars = 5;