USE powerproDatabase;
-- Insert sample data into 'User' table
INSERT INTO `user` (username, password, first_name, last_name, street, city, state, zip) 
VALUES 
('jdoe', 'password123', 'John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62704'),
('asmith', 'securepass', 'Anna', 'Smith', '456 Maple St', 'Chicago', 'IL', '60605'),
('bwayne', 'batmanrocks', 'Bruce', 'Wayne', '1007 Mountain Dr', 'Gotham', 'NY', '10001');

-- Insert sample data into 'Product' table
INSERT INTO `product` (product_name, available_quantity, price, popularity, category_wide, category_narrow)
VALUES 
('Compression Shirt', 50, 999.99, 5, 'Male', 'Tops'),
('Running Shorts', 30, 79.99, 3, 'Male', 'Bottoms'),
('Arm Sleeves', 100, 120.00, 4, 'Male', 'Tops'),
('Basketball Shoes', 200, 699.99, 5, 'Male', 'Footwear'),
('Wireless Headphones', 75, 199.99, 4, 'Accessories', 'Headphones');

-- Insert sample data into 'Purchase' table
INSERT INTO `purchase` (user_ID, product_ID, purchase_date)
VALUES 
(1, 1, '2023-09-15'),
(2, 3, '2023-09-20'),
(1, 2, '2023-10-01'),
(3, 4, '2023-10-03'),
(2, 5, '2023-10-07');
