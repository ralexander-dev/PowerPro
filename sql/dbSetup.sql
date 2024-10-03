-- Create database
CREATE DATABASE powerproDatabase;
-- Select the database to query
USE powerproDatabase;

-- Create tables
-- 'User' table
CREATE TABLE `User` (
  `UserID` int AUTO_INCREMENT,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Street` varchar(255) NOT NULL,
  `City` varchar(50) NOT NULL,
  `State` varchar(50) NOT NULL,
  `Zip` varchar(5) NOT NULL,
  PRIMARY KEY (`UserID`)
);

-- 'Product' table
CREATE TABLE `Product` (
  `ProductID` int AUTO_INCREMENT,
  `ProductName` varchar(50) NOT NULL,
  `AvailableQuantity` int NOT NULL,
  PRIMARY KEY (`ProductID`)
);

-- 'Order' table
CREATE TABLE `Order` (
  `OrderID` int AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `ProductID` int NOT NULL,
  PRIMARY KEY (`OrderID`),
  FOREIGN KEY (`UserID`) REFERENCES `User`(`UserID`),
  FOREIGN KEY (`ProductID`) REFERENCES `Product`(`ProductID`)
);

-- Insert data
-- Insert sample data into the 'User' table
INSERT INTO `User` (`Username`, `Password`, `FirstName`, `LastName`, `Street`, `City`, `State`, `Zip`) 
VALUES ('john_doe', 'password123', 'John', 'Doe', '123 Main St', 'Anytown', 'CA', '12345');

-- Insert sample data into the 'Product' table
INSERT INTO `Product` (`ProductName`, `AvailableQuantity`) 
VALUES ('Product A', 10);

-- Insert sample data into the 'Order' table
INSERT INTO `Order` (`UserID`, `ProductID`)
VALUES (1, 1);