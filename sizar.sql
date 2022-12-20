-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 20, 2022 at 07:30 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sizar`
--

-- --------------------------------------------------------

--
-- Table structure for table `plates`
--

DROP TABLE IF EXISTS `plates`;
CREATE TABLE IF NOT EXISTS `plates` (
  `Id` int(12) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Description` varchar(100) NOT NULL,
  `Src` varchar(30) NOT NULL,
  `Prix` varchar(30) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `plates`
--

INSERT INTO `plates` (`Id`, `Name`, `Description`, `Src`, `Prix`) VALUES
(10, 'Pizza', 'fghj', 'JJ', '20'),
(8, 'stick', 'stick', 'dfg', '40'),
(14, 'tajine', 'poulet', 'books2.jpg', '46'),
(22, 'salad', 'desc1', 'logo.jpeg', '20'),
(16, 'taktoka', 'des3', 'logo.jpeg', '20'),
(17, 'HJ', 'OP', 'books2.jpg', '9'),
(21, 'imane el mazani', 'poulet', 'C6.JPG', '78');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
