-- Create Database
CREATE DATABASE EmployeeDB;

CREATE TABLE employeet (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    hours INT,
    type INT,
    FOREIGN KEY (type) REFERENCES employeet(id) ON DELETE SET NULL
);
psql -h localhost -p 5433 -U postgres -d employee
mysecretpassword
-- Insert data into 'employeet'
INSERT INTO employeet (name)
VALUES 
  ('Manager'),
  ('Developer'),
  ('HR'),
  ('Sales');

-- Insert data into 'employee'
INSERT INTO employee (name, salary, hours, type)
VALUES 
  ('Alice', 60000.00, 40, 1),  -- type = 1 corresponds to 'Manager'
  ('Bob', 55000.00, 38, 2),    -- type = 2 corresponds to 'Developer'
  ('Charlie', 50000.00, 42, 3),  -- type = 3 corresponds to 'HR'
  ('David', 45000.00, 40, 4);  -- type = 4 corresponds to 'Sales'
