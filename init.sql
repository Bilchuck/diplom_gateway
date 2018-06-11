CREATE DATABASE temperature;

CREATE TABLE `records` IF NOT EXISTS (
  `id` char(36) NOT NULL,
  `temperature` int(11) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

