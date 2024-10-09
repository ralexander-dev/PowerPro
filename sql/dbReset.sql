USE powerproDatabase;
-- Disable foreign key checks to avoid errors when dropping tables with foreign key dependencies
SET FOREIGN_KEY_CHECKS = 0;

-- Drop the 'Order' table first as it has foreign key references to 'User' and 'Product'
DROP TABLE IF EXISTS `Purchase`;

-- Drop the 'Product' table
DROP TABLE IF EXISTS `Product`;

-- Drop the 'User' table
DROP TABLE IF EXISTS `User`;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;
