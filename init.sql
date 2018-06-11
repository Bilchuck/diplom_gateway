CREATE USER IF NOT EXISTS 'client'@'localhost' IDENTIFIED WITH auth_socket;
GRANT all ON *.* TO 'client'@'localhost';
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS temperature;

CREATE TABLE IF NOT EXISTS `temperature`.`records` (
  `id` char(36) NOT NULL,
  `temperature` int(11) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

