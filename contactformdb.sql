-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2023 at 06:14 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contactformdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `contactform`
--

CREATE TABLE `contactform` (
  `id` int(15) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `need` varchar(60) NOT NULL,
  `message` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactform`
--

INSERT INTO `contactform` (`id`, `fname`, `lname`, `email`, `need`, `message`) VALUES
(1, 'waman', 'parulekar', 'waman.parulekar@famt', 'Haven\'t received cashback yet', 'rtetretre'),
(2, 'waman', 'parulekar', 'waman.parulekar@famt', 'Request Service', 'dfsdfds'),
(3, 'Ajay', 'Sawant', 'ajay.sawant@famt.ac.', 'Request Service', 'wdadadw'),
(4, 'Ajay', 'Sawant', 'ajay.sawant@famt.ac.', 'Haven\'t received cashback yet', 'adwdadaw'),
(5, 'Ajay', 'Parulekar', 'ajay.parulekar@famt.', 'Haven\'t received cashback yet', 'dasadadssda'),
(6, 'Rahul', 'Khedekar', 'rahul@gmail.com', 'Request Service', 'asdgfsd'),
(7, 'Vishal', 'Jogale', 'vishal@gmail.com', 'Other', 'sddf'),
(8, 'Sahil', 'Chavan', 'sahil@gmail.com', 'Request Service', 'afdsfdf'),
(9, 'aditya', 'Main', 'aditya@gmail.com', 'Haven\'t received cashback yet', 'dsfdfd'),
(10, 'prasad', 'kumbhar', 'prasad@gmail.com', 'Request Service', 'fafd');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`) VALUES
(1, 'Rahul', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactform`
--
ALTER TABLE `contactform`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactform`
--
ALTER TABLE `contactform`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
