USE powerproDatabase;
-- Insert sample data into 'User' table
INSERT INTO `user` (username, password, first_name, last_name, street, city, state, zip, credits) 
VALUES 
('jdoe', 'password123', 'John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62704', 1000.00),
('asmith', 'securepass', 'Anna', 'Smith', '456 Maple St', 'Chicago', 'IL', '60605', 1000.00),
('bwayne', 'batmanrocks', 'Bruce', 'Wayne', '1007 Mountain Dr', 'Gotham', 'NY', '10001', 1000.00);

-- Insert sample data into 'Product' table
USE powerproDatabase;
INSERT INTO `product` (product_name, available_quantity, price, popularity, category_wide, category_narrow)
VALUES 
('Arm Sleeves', 100, 19.99, 3, 'Male', 'Tops'),
('Active Shorts', 60, 49.99, 3, 'Male', 'Bottoms'),
('Compression Socks', 150, 19.99, 4, 'Male', 'Footwear'),
('Large Duffle Bag', 40, 79.99, 5, 'Accessories', 'Bags'),
('Ankle Brace', 120, 14.99, 3, 'Accessories', 'Support'),
('Compression Shirt', 50, 999.99, 5, 'Male', 'Tops'),
('Running Shorts', 30, 79.99, 3, 'Male', 'Bottoms'),
('Waist Pack', 90, 24.99, 4, 'Accessories', 'Bags'),
('Leg Sleeve', 75, 39.99, 3, 'Accessories', 'Support'),
('Short Sleeves', 110, 29.99, 4, 'Male', 'Tops'),
('Weightlifting Shoes', 25, 159.99, 4, 'Male', 'Footwear'),
('Crossbody', 50, 59.99, 4, 'Accessories', 'Bags'),
('Lifting Belt', 35, 89.99, 3, 'Accessories', 'Support'),
('Skull Cap', 80, 14.99, 3, 'Accessories', 'Headgear'),
('Backpack', 45, 89.99, 3, 'Accessories', 'Bags'),
('Headband', 120, 12.99, 3, 'Accessories', 'Headgear'),
('Lifting Gloves', 40, 24.99, 3, 'Accessories', 'Gloves'),
('Sleeveless Shirt', 55, 29.99, 3, 'Male', 'Tops'),
('Wrist Straps', 100, 15.99, 3, 'Accessories', 'Support'),
('Baseball Cap', 70, 19.99, 3, 'Accessories', 'Headgear'),
('Joggers', 40, 49.99, 3, 'Male', 'Bottoms'),
('Regular Duffle Bag', 30, 69.99, 3, 'Accessories', 'Bags'),
('Sweats', 65, 39.99, 3, 'Male', 'Bottoms'),
('Knee Brace', 75, 19.99, 3, 'Accessories', 'Support'),
('Running Shoes', 100, 129.99, 3, 'Male', 'Footwear'),
('Trucker Hat', 50, 24.99, 3, 'Accessories', 'Headgear'),
('Beanie', 90, 14.99, 3, 'Accessories', 'Headgear');

-- Insert sample data into 'Purchase' table
INSERT INTO `purchase` (user_ID, product_ID, purchase_date, purchase_complete)
VALUES 
(1, 1, '2023-09-15', false),
(2, 3, '2023-09-20', false),
(1, 2, '2023-10-01', false),
(3, 4, '2023-10-03', false),
(2, 5, '2023-10-07', false);
