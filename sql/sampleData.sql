USE powerproDatabase;
-- Insert sample data into 'User' table
INSERT INTO `User` (Username, Password, FirstName, LastName, Street, City, State, Zip) 
VALUES 
('jdoe', 'password123', 'John', 'Doe', '123 Elm St', 'Springfield', 'IL', '62704'),
('asmith', 'securepass', 'Anna', 'Smith', '456 Maple St', 'Chicago', 'IL', '60605'),
('bwayne', 'batmanrocks', 'Bruce', 'Wayne', '1007 Mountain Dr', 'Gotham', 'NY', '10001');

-- Insert sample data into 'Product' table
INSERT INTO `Product` (ProductName, AvailableQuantity, Price, Popularity, Category_Wide, Category_Narrow)
VALUES 
('Compression Shirt', 50, 999.99, 5, 'Male', 'Tops'),
('Running Shorts', 30, 79.99, 3, 'Male', 'Bottoms'),
('Arm Sleeves', 100, 120.00, 4, 'Male', 'Tops'),
('Basketball Shoes', 200, 699.99, 5, 'Male', 'Footwear'),
('Wireless Headphones', 75, 199.99, 4, 'Accessories', 'Headphones');

-- Insert sample data into 'Purchase' table
INSERT INTO `Purchase` (UserID, ProductID, PurchaseDate)
VALUES 
(1, 1, '2023-09-15'),
(2, 3, '2023-09-20'),
(1, 2, '2023-10-01'),
(3, 4, '2023-10-03'),
(2, 5, '2023-10-07');
