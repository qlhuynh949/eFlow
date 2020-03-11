-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: eflow
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `permissions` int(11) NOT NULL,
  `join_date` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Admin','admin@eflow.io','5f4dcc3b5aa765d61d8327deb882cf99','The','Admin',1,0,'1582782386'),(2,'logbru','logan@loganbrunner.com','8c8a3868f824d01f9ba17d47c64ebe51','Logan','Brunner',1,0,'1582783727'),(3,'admin2','admin@eflow.io','5f4dcc3b5aa765d61d8327deb882cf99','The','Admin',1,0,'1582782386'),(4,'admin2','admin@eflow.io','696d29e0940a4957748fe3fc9efd22a3','The','Admin',1,0,'1582782386'),(5,'','','d41d8cd98f00b204e9800998ecf8427e','','',1,0,'1582836393'),(6,'testtest1','test@test.com','098f6bcd4621d373cade4e832627b4f6','test','test',1,0,'1582836532'),(7,'sdfgsdgsdf','fdgsdgsdg@yahoo.com','1a1dc91c907325c69271ddf0c944bc72','sdsgdfg','gsdfgsdfg',1,0,'1582837127'),(8,'testtesttest','test@test.com','1a1dc91c907325c69271ddf0c944bc72','test1','test2',1,0,'1582837174'),(9,'aria','aria@yahoo.com','1a1dc91c907325c69271ddf0c944bc72','aria','s',1,0,'1582837246'),(10,'logintest','admin@eflow.io','1a1dc91c907325c69271ddf0c944bc72','The','Admin',1,0,'1582782386'),(11,'hello','hello@hello','5d41402abc4b2a76b9719d911017c592','acc','acc',1,0,'1582839107');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-28 10:08:48
