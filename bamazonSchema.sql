USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product VARCHAR(45) NULL,
  dept VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product, dept, price, quantity)
VALUES ("balexa", "electronics", 100, 90), ("bindle", "electronics", 80, 50), 
("birestick", "electronics", 25, 75), ("printer", "electronics", 59, 100), 
("energy drink", "groceries", 2, 120), ("notepad", "office", 1.25, 75),
("headphones", "electronics", 15, 150), ("case", "accessories", 5.10, 120), 
("charger", "accessories", 15.25, 75), ("chips", "groceries", 1.75, 100);