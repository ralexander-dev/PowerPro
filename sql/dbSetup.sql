-- Create database
CREATE DATABASE powerproDatabase;
-- Select the database to query
USE powerproDatabase;

-- Create tables
-- 'user' table
CREATE TABLE `user` (
  `user_ID` int AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `street` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `zip` varchar(5) NOT NULL,
  PRIMARY KEY (`userID`)
);

-- 'product' table
CREATE TABLE `product` (
  `product_ID` int AUTO_INCREMENT,
  `product_name` varchar(50) NOT NULL,
  `available_quantity` int NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `popularity` int NOT NULL,
  `category_wide` varchar(50) NOT NULL,
  `category_narrow` varchar(50) NOT NULL,
  PRIMARY KEY (`product_ID`)
);

-- 'purchase' table
CREATE TABLE `purchase` (
  `purchase_ID` int AUTO_INCREMENT,
  `user_ID` int NOT NULL,
  `product_ID` int NOT NULL,
  `purchase_date` date NOT NULL,
  PRIMARY KEY (`purchase_ID`),
  FOREIGN KEY (`user_ID`) REFERENCES `user`(`user_ID`),
  FOREIGN KEY (`product_ID`) REFERENCES `product`(`product_ID`)
);
