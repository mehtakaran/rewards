CREATE DATABASE  IF NOT EXISTS `memberRewards` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `memberRewards`;
-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: memberRewards
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `memberRewards`
--

DROP TABLE IF EXISTS `memberRewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `memberRewards` (
  `memberId` int(11) DEFAULT NULL,
  `rewardId` int(11) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '1' COMMENT '1 - Active\n2 - Deleted',
  UNIQUE KEY `idxComposit` (`memberId`,`rewardId`),
  KEY `rewardId_idx` (`rewardId`),
  CONSTRAINT `memberId` FOREIGN KEY (`memberId`) REFERENCES `members` (`memberId`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `rewardId` FOREIGN KEY (`rewardId`) REFERENCES `rewards` (`rewardId`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `memberId` int(11) NOT NULL AUTO_INCREMENT,
  `memberName` varchar(45) DEFAULT NULL,
  `mobile` int(11) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '1' COMMENT '1 - Active\n2 - Deleted',
  PRIMARY KEY (`memberId`),
  UNIQUE KEY `idxUnique` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `rewards`
--

DROP TABLE IF EXISTS `rewards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rewards` (
  `rewardId` int(11) NOT NULL AUTO_INCREMENT,
  `rewardName` varchar(45) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '1' COMMENT '1 - Active\n2 - Deleted',
  PRIMARY KEY (`rewardId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-21 23:42:01
