-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2015 at 07:52 AM
-- Server version: 5.6.26
-- PHP Version: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bootstrapd6`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Eiger'),
(2, 'Export'),
(3, 'Bodypack');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL,
  `code` char(64) NOT NULL,
  `name` varchar(255) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `color` varchar(64) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` bigint(20) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `code`, `name`, `brand_id`, `color`, `stock`, `price`, `is_active`) VALUES
(1, 'qwe1', 'tas', 2, 'green', 12, 12, 0),
(3, 'P-AA1', 'asfdasfasf', 2, 'dsafdasfsa', 6, 10, 0),
(4, 'P-AA1', 'adsadsadas', 2, 'adsadasd', 1, 7, 0),
(5, 'P-AA1', 'Tasssssssssssssssssssssssssssssssss', 1, 'blue', 0, 10, 0),
(6, 'P-AA1', 'shirt', 2, 'black', 100, 10, 0),
(7, 'P-AA1', 'Bag', 3, 'white', 25, 10, 0),
(8, 'P-AA1', 'shoes', 1, 'black', 98, 10, 0),
(9, 'P-AA1', 'fasfsadfsafsa', 2, 'black', 12, 1212, 0),
(10, 'P-AA1', 'asdfasfasfsa', 1, 'ewrew', 1212, 22, 0),
(11, 'P-AA1', 'sfdasfdsadfeads', 1, 'vavavava', 12, 11, 0),
(12, 'P-AA1', 'a', 1, 'a', 1, 1, 0),
(13, 'P-AA1', 'aaaa', 3, 'aaaa', 1, 1, 0),
(14, 'P-AA1', 'dfasfsadf', 1, 'fadsasfas', 12, 11, 0),
(15, 'P-AA1', 'dfasfsdafa', 1, 'fasfsafa', 1, 12, 0),
(16, 'P-AA1', 'fadasfsa', 1, 'sadsa', 1, 12, 0),
(17, 'P-AA1', 'dafasfas', 1, 'fsafdsafasf', 121, 1, 0),
(18, 'P-AA1', 'dfafasdfsa', 2, 'sadfasfas', 121, 12, 0),
(19, 'P-AA1', 'dafadfasf', 1, 'as2esa', 12, 1, 0),
(20, 'P-AA2', 'dfadfasfas', 1, 'safasfasfasfa', 12, 1, 0),
(21, 'P-AA3', 'dsafafas', 2, 'hijau', 123, 1, 0),
(27, 'P-AA1', 'aaa', 1, 'aaa', 1, 12, 0),
(28, 'P-AA2', 'asfdsafdas', 2, 'asfasfassf', 12, 1, 0),
(29, 'P-AA1', 'adaa', 2, '1asad', 11, 12, 0),
(30, 'P-AA1', 'adsada', 2, 'asdasdasdada', 10, 11, 1),
(31, 'P-AA2', 'safasfas', 1, 'asdfsafas', 12, 1111, 0),
(32, 'P-AA2', 'adsadad', 2, 'asdadad', 12, 111, 1),
(33, 'P-AA3', 'asdfadfsa', 2, 'sfasafsa', 12, 111, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_history`
--

CREATE TABLE IF NOT EXISTS `product_history` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `product_id` int(11) NOT NULL,
  `stock_out` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_history`
--

INSERT INTO `product_history` (`id`, `date`, `product_id`, `stock_out`, `price`, `total`) VALUES
(1, '2015-09-16 05:09:12', 32, 1, 12, 12),
(2, '2015-10-01 09:48:08', 30, 1, 11, 11),
(3, '2015-10-01 09:48:22', 30, 1, 11, 11);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL,
  `title` varchar(32) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `title`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` char(64) NOT NULL,
  `password` text NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phone_number` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `title_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `fullname`, `phone_number`, `email`, `title_id`) VALUES
(8, 'fdasfasfas', '', 'safsafsas', '53252353', 'afafasf@a', 1),
(9, 'sfafsafasd', '', 'fasfsafsafas', 'fasfasfsfasfs', 'a@a', 1),
(10, 'klsafskjadjk', '$2a$10$s9qWdbD1TGTdIOogkWQ1JOy51cQjmaH3VDkKsvn98gBCOJAEjpdfq', 'fnaskjfnsakjf', '987890', 'a@a', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_id` (`brand_id`);

--
-- Indexes for table `product_history`
--
ALTER TABLE `product_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `product_id_2` (`product_id`),
  ADD KEY `product_id_3` (`product_id`),
  ADD KEY `product_id_4` (`product_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status_id` (`title_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `product_history`
--
ALTER TABLE `product_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

--
-- Constraints for table `product_history`
--
ALTER TABLE `product_history`
  ADD CONSTRAINT `product_history_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`title_id`) REFERENCES `role` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
