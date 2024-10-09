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
  `Price` decimal(10, 2) NOT NULL,
  `Popularity` int NOT NULL,
  `Category_Wide` varchar(50) NOT NULL,
  `Category_Narrow` varchar(50) NOT NULL,
  PRIMARY KEY (`ProductID`)
);

-- 'Order' table
CREATE TABLE `Purchase` (
  `PurchaseID` int AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `ProductID` int NOT NULL,
  `PurchaseDate` date NOT NULL,
  PRIMARY KEY (`PurchaseID`),
  FOREIGN KEY (`UserID`) REFERENCES `User`(`UserID`),
  FOREIGN KEY (`ProductID`) REFERENCES `Product`(`ProductID`)
);
