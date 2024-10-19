USE powerproDatabase;
-- Disable foreign key checks to avoid errors when dropping tables with foreign key dependencies
SET FOREIGN_KEY_CHECKS = 0;

-- Drop the 'Order' table first as it has foreign key references to 'User' and 'Product'
DROP TABLE IF EXISTS `purchase`;

-- Drop the 'Product' table
DROP TABLE IF EXISTS `product`;

-- Drop the 'User' table
DROP TABLE IF EXISTS `user`;

-- Re-enable foreign key checks
SET FOREIGN_KEY_CHECKS = 1;
