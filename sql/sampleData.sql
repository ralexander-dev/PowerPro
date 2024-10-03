-- Select the database
USE powerproDatabase;

-- Insert sample data
INSERT INTO `User` (`Username`, `Password`, `FirstName`, `LastName`, `Street`, `City`, `State`, `Zip`) 
VALUES 
('james', 'password127', 'james', 'donny', '123 Sub St', 'Somecity', 'FL', '12346'),
('jane53', 'password128', 'jane', 'doe', '123 Main St', 'Somecity', 'FL', '12345'),
('john32', 'password1738', 'john', 'smith', '123 Elm St', 'Somecity', 'FL', '12344');

INSERT INTO `Product` (`ProductName`, `AvailableQuantity`) 
VALUES 
('Product B', 40),
('Product C', 20),
('Product D', 10),
('Product E', 5),
('Product F', 2);

INSERT INTO `Order` (`UserID`, `ProductID`)
VALUES 
(2, 2),
(2, 3),
(3, 1);