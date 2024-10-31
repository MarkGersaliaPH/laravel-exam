-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: exams
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_question`
--

DROP TABLE IF EXISTS `exam_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exam_question` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `exam_id` bigint unsigned NOT NULL,
  `question_id` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_question`
--

LOCK TABLES `exam_question` WRITE;
/*!40000 ALTER TABLE `exam_question` DISABLE KEYS */;
INSERT INTO `exam_question` VALUES (1,16,17,NULL,NULL),(2,16,6,NULL,NULL),(3,16,2,NULL,NULL),(7,17,1,NULL,NULL),(13,17,2,NULL,NULL),(14,17,3,NULL,NULL),(15,17,4,NULL,NULL),(16,17,5,NULL,NULL),(17,17,6,NULL,NULL),(18,17,15,NULL,NULL),(19,17,16,NULL,NULL),(20,17,17,NULL,NULL),(21,1,1,NULL,NULL),(22,1,15,NULL,NULL),(23,1,16,NULL,NULL),(24,1,17,NULL,NULL),(25,1,2,NULL,NULL),(26,1,6,NULL,NULL),(27,1,5,NULL,NULL),(28,1,4,NULL,NULL),(29,1,3,NULL,NULL),(30,2,2,NULL,NULL),(31,2,3,NULL,NULL),(32,2,18,NULL,NULL),(33,2,19,NULL,NULL),(34,18,26,NULL,NULL),(35,18,27,NULL,NULL),(36,18,28,NULL,NULL),(37,18,1,NULL,NULL),(38,18,23,NULL,NULL),(39,18,24,NULL,NULL),(40,18,25,NULL,NULL),(41,18,22,NULL,NULL),(42,18,2,NULL,NULL),(43,18,3,NULL,NULL),(44,18,4,NULL,NULL),(45,18,18,NULL,NULL),(46,18,19,NULL,NULL),(47,18,20,NULL,NULL),(48,18,21,NULL,NULL);
/*!40000 ALTER TABLE `exam_question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exams` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `time_limit` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `difficulty` tinyint NOT NULL,
  `created_by` bigint unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exams`
--

LOCK TABLES `exams` WRITE;
/*!40000 ALTER TABLE `exams` DISABLE KEYS */;
INSERT INTO `exams` VALUES (1,'Laravel Beginner Exam','TEST','60',1,1,'2024-10-10 00:19:07','2024-10-10 00:19:07'),(2,'Laravel Intermediate Exam','TEST','60',2,1,'2024-10-10 00:22:26','2024-10-10 00:22:26'),(4,'Laravel Junior Developer Exam','TEST','20',1,1,'2024-10-30 19:36:10','2024-10-30 19:36:10'),(18,'Full Stack Development','Full Stack Development EXAM','60',3,1,'2024-10-31 00:42:19','2024-10-31 00:42:19');
/*!40000 ALTER TABLE `exams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(10,'2024_10_08_081403_create_questions_table',2),(11,'2024_10_09_060535_create_categories_table',2),(12,'2024_10_10_033308_create_question_options_table',3),(14,'2024_10_10_034819_create_question_code_outputs_table',4),(18,'2024_10_10_061627_create_programming_langguages_table',6),(20,'2024_10_10_061237_create_question_programming_langguages_table',7),(24,'2024_10_10_065031_create_exams_table',8),(25,'2024_10_10_082302_create_exam_questions_table',9),(26,'2024_10_15_074050_create_tag_tables',10),(27,'2024_10_17_063453_add_username_field_in_users_table',11);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_code_outputs`
--

DROP TABLE IF EXISTS `question_code_outputs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_code_outputs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `question_id` bigint unsigned NOT NULL,
  `output` longtext COLLATE utf8mb4_unicode_ci,
  `correct_output` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_code_outputs`
--

LOCK TABLES `question_code_outputs` WRITE;
/*!40000 ALTER TABLE `question_code_outputs` DISABLE KEYS */;
INSERT INTO `question_code_outputs` VALUES (1,14,NULL,'php artisan migrate','2024-10-09 20:16:50','2024-10-09 20:16:50');
/*!40000 ALTER TABLE `question_code_outputs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_options`
--

DROP TABLE IF EXISTS `question_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_options` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `question_id` bigint unsigned NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_correct` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_options`
--

LOCK TABLES `question_options` WRITE;
/*!40000 ALTER TABLE `question_options` DISABLE KEYS */;
INSERT INTO `question_options` VALUES (1,1,'A','A front-end JavaScript framework used for building single-page applications.',0,'2024-10-09 21:52:45','2024-10-09 21:52:45'),(2,1,'B','A PHP framework designed for building web applications following the MVC (Model-View-Controller) architecture.',1,'2024-10-09 21:52:45','2024-10-09 21:52:45'),(3,1,'C','A database management system used for storing data in web applications.',0,'2024-10-09 21:52:45','2024-10-09 21:52:45'),(4,1,'D','A command-line tool for managing server configurations.',0,'2024-10-09 21:52:45','2024-10-09 21:52:45'),(5,2,'A','To handle HTTP requests and responses in the application\'s controller.',0,'2024-10-09 21:53:28','2024-10-09 21:53:28'),(6,2,'B','To provide a way to filter HTTP requests entering your application, allowing for tasks like authentication, logging, and CORS handling.',1,'2024-10-09 21:53:28','2024-10-09 21:53:28'),(7,2,'C','To manage database connections and perform CRUD operations.',0,'2024-10-09 21:53:28','2024-10-09 21:53:28'),(8,2,'D','To define routes for the application and bind them to controller actions.',0,'2024-10-09 21:53:28','2024-10-09 21:53:28'),(9,4,'A','To create a new controller in the application.',1,'2024-10-10 01:42:42','2024-10-10 01:42:42'),(10,4,'B','To run the database migrations defined in the application.',0,'2024-10-10 01:42:42','2024-10-10 01:42:42'),(11,4,'C','To seed the database with initial data.',0,'2024-10-10 01:42:42','2024-10-10 01:42:42'),(12,4,'D','To compile assets for production.',0,'2024-10-10 01:42:42','2024-10-10 01:42:42'),(13,18,'A','Model::find($id)',1,'2024-10-31 00:26:30','2024-10-31 00:26:30'),(14,18,'B','Model::get($id)',0,'2024-10-31 00:26:30','2024-10-31 00:26:30'),(15,18,'C','Model::where(\'id\', $id)',0,'2024-10-31 00:26:30','2024-10-31 00:26:30'),(16,18,'D','Model::retrieve($id)',0,'2024-10-31 00:26:30','2024-10-31 00:26:30'),(17,19,'A','To filter specific columns',0,'2024-10-31 00:27:08','2024-10-31 00:27:08'),(18,19,'B','To delete related models',0,'2024-10-31 00:27:08','2024-10-31 00:27:08'),(19,19,'C','To eager load relationships',1,'2024-10-31 00:27:08','2024-10-31 00:27:08'),(20,19,'D','To insert data into multiple tables',0,'2024-10-31 00:27:08','2024-10-31 00:27:08'),(21,20,'A','->paginate()',1,'2024-10-31 00:30:30','2024-10-31 00:30:30'),(22,20,'B','->pages()',0,'2024-10-31 00:30:30','2024-10-31 00:30:30'),(23,20,'C','->page()',0,'2024-10-31 00:30:30','2024-10-31 00:30:30'),(24,20,'D','->slice()',0,'2024-10-31 00:30:30','2024-10-31 00:30:30'),(25,21,'A','The model can belong to many records in another model.',0,'2024-10-31 00:32:05','2024-10-31 00:32:05'),(26,21,'B','The model has multiple records associated with it in another model.',1,'2024-10-31 00:32:05','2024-10-31 00:32:05'),(27,21,'C','The model has a one-to-one relationship with another model.',0,'2024-10-31 00:32:05','2024-10-31 00:32:05'),(28,21,'D','The model has a polymorphic relationship with another model.',0,'2024-10-31 00:32:05','2024-10-31 00:32:05'),(29,22,'A','To create server-side scripts',0,'2024-10-31 00:33:23','2024-10-31 00:33:23'),(30,22,'B','To make JavaScript programming easier and more concise',1,'2024-10-31 00:33:23','2024-10-31 00:33:23'),(31,22,'C','To style HTML elements',0,'2024-10-31 00:33:23','2024-10-31 00:33:23'),(32,22,'D','To perform database operations',0,'2024-10-31 00:33:23','2024-10-31 00:33:23'),(33,23,'A','@',0,'2024-10-31 00:34:15','2024-10-31 00:34:15'),(34,23,'B','#',0,'2024-10-31 00:34:15','2024-10-31 00:34:15'),(35,23,'C','$',1,'2024-10-31 00:34:15','2024-10-31 00:34:15'),(36,23,'D','&',0,'2024-10-31 00:34:15','2024-10-31 00:34:15'),(37,24,'A','It waits until the document has finished loading before executing any jQuery code.',1,'2024-10-31 00:35:10','2024-10-31 00:35:10'),(38,24,'B','It is used to style elements on the page.',0,'2024-10-31 00:35:10','2024-10-31 00:35:10'),(39,24,'C','It stops all animations on the page.',0,'2024-10-31 00:35:10','2024-10-31 00:35:10'),(40,24,'D','It refreshes the document.',0,'2024-10-31 00:35:10','2024-10-31 00:35:10'),(41,25,'A','$(\"example\")',0,'2024-10-31 00:36:16','2024-10-31 00:36:16'),(42,25,'B','$(\".example\")',1,'2024-10-31 00:36:16','2024-10-31 00:36:16'),(43,25,'C','$(\"#example\")',0,'2024-10-31 00:36:16','2024-10-31 00:36:16'),(44,25,'D','$(example)',0,'2024-10-31 00:36:16','2024-10-31 00:36:16'),(45,26,'A','color',1,'2024-10-31 00:37:59','2024-10-31 00:37:59'),(46,26,'B','font-color',0,'2024-10-31 00:37:59','2024-10-31 00:37:59'),(47,26,'C','text-color',0,'2024-10-31 00:37:59','2024-10-31 00:37:59'),(48,26,'D','background-color',0,'2024-10-31 00:37:59','2024-10-31 00:37:59'),(49,27,'A','font-weight: bold;',1,'2024-10-31 00:38:49','2024-10-31 00:38:49'),(50,27,'B','font-style: bold;',0,'2024-10-31 00:38:49','2024-10-31 00:38:49'),(51,27,'C','text-decoration: bold;',0,'2024-10-31 00:38:49','2024-10-31 00:38:49'),(52,27,'D','text-transform: bold;',0,'2024-10-31 00:38:49','2024-10-31 00:38:49'),(53,28,'A','color',0,'2024-10-31 00:39:37','2024-10-31 00:39:37'),(54,28,'B','background-color',1,'2024-10-31 00:39:37','2024-10-31 00:39:37'),(55,28,'C','bg-color',0,'2024-10-31 00:39:37','2024-10-31 00:39:37'),(56,28,'D','background-style',0,'2024-10-31 00:39:37','2024-10-31 00:39:37');
/*!40000 ALTER TABLE `question_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_programming_langguages`
--

DROP TABLE IF EXISTS `question_programming_langguages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_programming_langguages` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_programming_langguages`
--

LOCK TABLES `question_programming_langguages` WRITE;
/*!40000 ALTER TABLE `question_programming_langguages` DISABLE KEYS */;
INSERT INTO `question_programming_langguages` VALUES (1,'php','2024-10-09 22:31:26','2024-10-09 22:31:26'),(2,'laravel','2024-10-09 22:31:30','2024-10-09 22:31:30'),(3,'javascript','2024-10-09 22:31:35','2024-10-09 22:31:35'),(4,'Reactjs','2024-10-09 22:31:42','2024-10-09 22:31:42'),(5,'css','2024-10-31 00:37:03','2024-10-31 00:37:03');
/*!40000 ALTER TABLE `question_programming_langguages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `type` int NOT NULL DEFAULT '1',
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correct_answer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category_id` bigint unsigned DEFAULT NULL,
  `difficulty` int DEFAULT '1',
  `programming_langguage_id` bigint unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,1,'What is Laravel?','B). A PHP framework designed for building web applications following the MVC (Model-View-Controller) architecture.',NULL,1,2,'2024-10-09 21:52:45','2024-10-09 22:35:23'),(2,1,'In Laravel, what is the purpose of middleware?','B). To provide a way to filter HTTP requests entering your application, allowing for tasks like authentication, logging, and CORS handling.',NULL,2,2,'2024-10-09 21:53:28','2024-10-09 22:38:43'),(3,2,'Write a Laravel route that returns a JSON response with the message \"Welcome to Laravel!\" when the endpoint /welcome is accessed.','Route::get(\'/welcome\', function () {\n    return response()->json([\'message\' => \'Welcome to Laravel!\']);\n});',NULL,2,2,'2024-10-09 21:58:25','2024-10-09 22:39:29'),(4,1,'What is the purpose of the php artisan migrate command in Laravel?','A). To create a new controller in the application.',NULL,1,2,'2024-10-10 01:42:42','2024-10-10 01:42:42'),(18,1,'In Laravel, which method would you use to retrieve a record by its primary key in an Eloquent model?','A). Model::find($id)',NULL,2,2,'2024-10-31 00:26:30','2024-10-31 00:26:30'),(19,1,'What is the purpose of the with method in Laravel Eloquent?','C). To eager load relationships',NULL,2,2,'2024-10-31 00:27:08','2024-10-31 00:27:08'),(20,1,'Which of the following methods is used to apply pagination in Laravel Eloquent?','A). ->paginate()',NULL,2,2,'2024-10-31 00:30:30','2024-10-31 00:30:30'),(21,1,'In Laravel, what does the hasMany relationship signify in Eloquent?','B). The model has multiple records associated with it in another model.',NULL,2,2,'2024-10-31 00:32:05','2024-10-31 00:32:05'),(22,1,'What is the main purpose of jQuery?','B). To make JavaScript programming easier and more concise',NULL,1,3,'2024-10-31 00:33:22','2024-10-31 00:33:22'),(23,1,'Which symbol is used to access jQuery in JavaScript?','C). $',NULL,1,3,'2024-10-31 00:34:15','2024-10-31 00:34:15'),(24,1,'What does the $(document).ready() function do in jQuery?','A). It waits until the document has finished loading before executing any jQuery code.',NULL,1,3,'2024-10-31 00:35:10','2024-10-31 00:35:10'),(25,1,'How do you select an element with the class \"example\" in jQuery?','B). $(\".example\")',NULL,1,3,'2024-10-31 00:36:16','2024-10-31 00:36:16'),(26,1,'Which property is used in CSS to change the text color of an element?','A). color',NULL,1,5,'2024-10-31 00:37:59','2024-10-31 00:37:59'),(27,1,'How do you make the text bold using CSS?','A). font-weight: bold;',NULL,1,5,'2024-10-31 00:38:49','2024-10-31 00:38:49'),(28,1,'Which CSS property is used to change the background color of an element?','B). background-color',NULL,1,5,'2024-10-31 00:39:37','2024-10-31 00:39:37');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taggables`
--

DROP TABLE IF EXISTS `taggables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taggables` (
  `tag_id` bigint unsigned NOT NULL,
  `taggable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `taggable_id` bigint unsigned NOT NULL,
  UNIQUE KEY `taggables_tag_id_taggable_id_taggable_type_unique` (`tag_id`,`taggable_id`,`taggable_type`),
  KEY `taggables_taggable_type_taggable_id_index` (`taggable_type`,`taggable_id`),
  CONSTRAINT `taggables_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taggables`
--

LOCK TABLES `taggables` WRITE;
/*!40000 ALTER TABLE `taggables` DISABLE KEYS */;
INSERT INTO `taggables` VALUES (4,'App\\Models\\Exam',1),(5,'App\\Models\\Exam',1),(6,'App\\Models\\Exam',1),(7,'App\\Models\\Exam',1),(7,'App\\Models\\Exam',18),(10,'App\\Models\\Exam',18),(11,'App\\Models\\Exam',18),(12,'App\\Models\\Exam',18),(4,'App\\Models\\Question',1),(5,'App\\Models\\Question',1),(7,'App\\Models\\Question',1),(4,'App\\Models\\Question',2),(7,'App\\Models\\Question',2),(4,'App\\Models\\Question',18),(5,'App\\Models\\Question',18),(7,'App\\Models\\Question',18),(4,'App\\Models\\Question',19),(5,'App\\Models\\Question',19),(7,'App\\Models\\Question',19),(4,'App\\Models\\Question',20),(5,'App\\Models\\Question',20),(6,'App\\Models\\Question',20),(7,'App\\Models\\Question',20),(4,'App\\Models\\Question',21),(5,'App\\Models\\Question',21),(6,'App\\Models\\Question',21),(7,'App\\Models\\Question',21),(8,'App\\Models\\Question',22),(9,'App\\Models\\Question',22),(6,'App\\Models\\Question',23),(7,'App\\Models\\Question',23),(8,'App\\Models\\Question',23),(9,'App\\Models\\Question',23),(6,'App\\Models\\Question',24),(7,'App\\Models\\Question',24),(8,'App\\Models\\Question',24),(9,'App\\Models\\Question',24),(6,'App\\Models\\Question',25),(7,'App\\Models\\Question',25),(8,'App\\Models\\Question',25),(9,'App\\Models\\Question',25),(7,'App\\Models\\Question',26),(10,'App\\Models\\Question',26),(11,'App\\Models\\Question',26),(12,'App\\Models\\Question',26),(10,'App\\Models\\Question',27),(11,'App\\Models\\Question',27),(12,'App\\Models\\Question',27),(10,'App\\Models\\Question',28),(12,'App\\Models\\Question',28);
/*!40000 ALTER TABLE `taggables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` json NOT NULL,
  `slug` json NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_column` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (4,'{\"en\": \"laravel\"}','{\"en\": \"laravel\"}',NULL,4,'2024-10-17 00:12:28','2024-10-17 00:12:28'),(5,'{\"en\": \"php\"}','{\"en\": \"php\"}',NULL,5,'2024-10-17 00:12:28','2024-10-17 00:12:28'),(6,'{\"en\": \"javascript\"}','{\"en\": \"javascript\"}',NULL,6,'2024-10-17 00:12:28','2024-10-17 00:12:28'),(7,'{\"en\": \"fullstack\"}','{\"en\": \"fullstack\"}',NULL,7,'2024-10-17 00:12:28','2024-10-17 00:12:28'),(8,'{\"en\": \"jquery\"}','{\"en\": \"jquery\"}',NULL,8,'2024-10-31 00:33:23','2024-10-31 00:33:23'),(9,'{\"en\": \"js\"}','{\"en\": \"js\"}',NULL,9,'2024-10-31 00:33:23','2024-10-31 00:33:23'),(10,'{\"en\": \"css\"}','{\"en\": \"css\"}',NULL,10,'2024-10-31 00:37:59','2024-10-31 00:37:59'),(11,'{\"en\": \"sass\"}','{\"en\": \"sass\"}',NULL,11,'2024-10-31 00:37:59','2024-10-31 00:37:59'),(12,'{\"en\": \"front-end\"}','{\"en\": \"front-end\"}',NULL,12,'2024-10-31 00:37:59','2024-10-31 00:37:59');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'12345678','admin','admin@admin.com',NULL,'$2y$12$Vvflxbv1aBCLPNi1meGHgexrctGdAWu8PdpbuHnzUiOmiAfxJfP0q',NULL,'2024-10-08 00:09:15','2024-10-08 00:09:15');
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

-- Dump completed on 2024-10-31 16:58:34
