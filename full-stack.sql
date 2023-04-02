-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 02, 2023 at 06:21 PM
-- Server version: 5.7.40
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `full-stack`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addedTime` datetime NOT NULL,
  `publishedTime` datetime NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `content` text NOT NULL,
  `reporterId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `addedTime`, `publishedTime`, `title`, `description`, `content`, `reporterId`, `categoryId`, `isDeleted`) VALUES
(2, '2022-09-21 16:47:46', '2022-09-21 16:47:46', 'המלפפון שהפך לעגבניה', 'זה סיפור מאוד מרתק', '', 4, 0, 0),
(3, '2022-09-21 16:47:46', '2022-09-21 16:47:46', 'שיעור אחרון ב-MySQL', 'זה שיעור סיכום', '', 1, 0, 0),
(4, '2022-09-21 16:47:46', '2022-09-21 16:47:46', 'בסוף השיעור יישלח אליכם ה-DB', 'כדאי לכם לחכות', '', 4, 0, 0),
(8, '2022-09-21 16:47:46', '2022-09-21 16:47:46', 'התפוח שהפך לתפוז', 'זה סיפור מעפאן', '', 1, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cash`
--

DROP TABLE IF EXISTS `cash`;
CREATE TABLE IF NOT EXISTS `cash` (
  `num` float NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cash`
--

INSERT INTO `cash` (`num`, `amount`) VALUES
(0.1, 500),
(0.5, 200),
(1, 148),
(2, 97),
(5, 98),
(10, 78),
(20, 199),
(50, 27),
(100, 97),
(200, 546);

-- --------------------------------------------------------

--
-- Table structure for table `cash_inventory`
--

DROP TABLE IF EXISTS `cash_inventory`;
CREATE TABLE IF NOT EXISTS `cash_inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(200) NOT NULL,
  `nis_0_1` int(11) NOT NULL DEFAULT '0',
  `nis_0_5` int(11) NOT NULL DEFAULT '0',
  `nis_1` int(11) NOT NULL DEFAULT '0',
  `nis_2` int(11) NOT NULL DEFAULT '0',
  `nis_5` int(11) NOT NULL DEFAULT '0',
  `nis_10` int(11) NOT NULL DEFAULT '0',
  `nis_20` int(11) NOT NULL DEFAULT '0',
  `nis_50` int(11) NOT NULL DEFAULT '0',
  `nis_100` int(11) NOT NULL DEFAULT '0',
  `nis_200` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cash_inventory`
--

INSERT INTO `cash_inventory` (`id`, `time`, `title`, `nis_0_1`, `nis_0_5`, `nis_1`, `nis_2`, `nis_5`, `nis_10`, `nis_20`, `nis_50`, `nis_100`, `nis_200`) VALUES
(1, '2023-04-02 15:00:10', 'הוספה ראשונית למלאי', 500, 200, 150, 120, 300, 700, 500, 300, 400, 800),
(2, '2023-04-02 18:20:27', 'תשלום ללקוח', 0, 0, -1, 0, -1, 0, 0, -1, 0, -6),
(3, '2023-04-02 18:32:24', 'תשלום ללקוח', 0, -1, 0, 0, -1, -1, -1, 0, -1, -63),
(4, '2023-04-02 18:32:24', 'תשלום ללקוח', 0, -36, 0, 0, -75, -1, -1, -60, -200, -500),
(5, '2023-04-02 18:48:16', 'תשלום ללקוח', 0, 0, -1, -1, -1, 0, 0, -1, 0, 0),
(6, '2023-04-02 18:48:54', 'תשלום ללקוח', -3, -1, 0, 0, 0, 0, 0, 0, 0, 0),
(7, '2023-04-02 18:49:08', 'תשלום ללקוח', 0, 0, 0, 0, 0, 0, 0, 0, 0, -31),
(8, '2023-04-02 20:48:25', 'הוספה למלאי', 3, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(9, '2023-04-02 20:49:01', 'הוספה למלאי', 5, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(10, '2023-04-02 20:49:55', 'הוספה למלאי', 5, 8, 2, 1, 8, 2, 2, 2, 1, 0),
(11, '2023-04-02 21:07:31', 'תשלום ללקוח', 0, 0, 0, 0, -1, 0, 0, -1, -1, -27),
(12, '2023-04-02 21:08:13', 'הוספה למלאי', 555, 666, 777, 0, 0, 0, 0, 0, 0, 0),
(13, '2023-04-02 21:08:30', 'תשלום ללקוח', 0, 0, 0, -1, -1, -1, -1, -1, -1, -2),
(14, '2023-04-02 21:09:50', 'תשלום ללקוח', 0, 0, -1, 0, -1, -1, -189, -238, -198, -171),
(15, '2023-04-02 21:10:24', 'תשלום ללקוח', 0, 0, 0, 0, 0, -80, -310, 0, 0, 0),
(16, '2023-04-02 21:10:40', 'תשלום ללקוח', 0, 0, 0, 0, 0, -500, 0, 0, 0, 0),
(17, '2023-04-02 21:12:30', 'תשלום ללקוח', 0, 0, -1, -1, -1, -11, 0, 0, 0, 0),
(18, '2023-04-02 21:12:34', 'תשלום ללקוח', 0, 0, 0, 0, -1, -12, 0, 0, 0, 0),
(19, '2023-04-02 21:12:38', 'תשלום ללקוח', 0, 0, 0, -2, -1, -36, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
CREATE TABLE IF NOT EXISTS `cities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `areaCode` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `areaCode`) VALUES
(1, 'Jerusalem', 2),
(3, 'Haifa', 4),
(4, 'Tel Aviv', 3),
(5, 'Yerucham', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(30) NOT NULL,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `phone` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `city` varchar(30) NOT NULL,
  `isFavorite` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `firstName`, `lastName`, `createTime`, `phone`, `email`, `city`, `isFavorite`) VALUES
(6, 'Bette', 'Skerratt', '2022-02-11 00:00:00.000000', '258-514-8920', 'bskerratt5@hugedomains.com', 'Säter', 0),
(7, 'Alta', 'Coopland', '2022-08-15 00:00:00.000000', '184-236-7643', 'acoopland6@theglobeandmail.com', 'Liaoyang', 0),
(9, 'Tandie', 'Pitbladdo', '2022-07-16 00:00:00.000000', '602-894-6126', 'tpitbladdo8@google.es', 'Tabira', 0),
(10, 'Krissie', 'Kennally', '2022-02-08 00:00:00.000000', '387-695-2514', 'kkennally9@linkedin.com', 'Saint John’s', 0),
(11, 'Iolande', 'Knowlman', '2021-11-08 00:00:00.000000', '568-443-3467', 'iknowlmana@ihg.com', 'Yangjingziwan', 0),
(12, 'Cecilio', 'Pasby', '2022-04-03 00:00:00.000000', '500-117-1238', 'cpasbyb@disqus.com', 'Kangdong-ŭp', 0),
(13, 'Eleanor', 'Merriday', '2022-09-13 00:00:00.000000', '684-827-8133', 'emerridayc@altervista.org', 'Gnieżdżewo', 0),
(14, 'Octavia', 'Emlin', '2022-08-12 00:00:00.000000', '241-458-9185', 'oemlind@zimbio.com', 'Qishui', 0),
(15, 'Alvy', 'Saunt', '2022-07-28 00:00:00.000000', '361-836-2272', 'asaunte@cafepress.com', 'Limonade', 0),
(16, 'Merralee', 'Pool', '2022-05-07 00:00:00.000000', '373-895-2814', 'mpoolf@cocolog-nifty.com', 'Daphu', 0),
(17, 'Kendricks', 'Kusick', '2022-04-09 00:00:00.000000', '343-463-8450', 'kkusickg@google.pl', 'Tanagara', 0),
(18, 'Jaynell', 'Morcomb', '2022-08-17 00:00:00.000000', '502-612-9276', 'jmorcombh@ucoz.com', 'Jammāl', 0),
(19, 'Madison', 'Barnardo', '2022-07-26 00:00:00.000000', '152-985-7810', 'mbarnardoi@jugem.jp', 'La Carlota', 0),
(20, 'Deirdre', 'Dowthwaite', '2022-10-19 00:00:00.000000', '848-536-8367', 'ddowthwaitej@alibaba.com', 'Anguera', 0),
(21, 'Lenard', 'Boyson', '2021-12-07 00:00:00.000000', '594-279-4785', 'lboysonk@feedburner.com', 'Beppu', 0),
(22, 'Eleni', 'McCurrie', '2021-11-20 00:00:00.000000', '439-630-5322', 'emccurriel@google.cn', 'Heping', 0),
(23, 'Dodi', 'Wheelton', '2022-07-08 00:00:00.000000', '575-357-1338', 'dwheeltonm@barnesandnoble.com', 'Danxi', 0),
(24, 'Daveen', 'Honatsch', '2022-04-22 00:00:00.000000', '294-709-6601', 'dhonatschn@dion.ne.jp', 'Fayaoué', 0),
(25, 'Mellicent', 'Huddle', '2022-03-17 00:00:00.000000', '702-942-9641', 'mhuddleo@vkontakte.ru', 'Nemby', 0),
(26, 'Munmro', 'Load', '2022-10-03 00:00:00.000000', '329-543-6841', 'mloadp@pcworld.com', 'Uurainen', 0),
(27, 'Dehlia', 'Matthew', '2022-07-25 00:00:00.000000', '284-228-2692', 'dmatthewq@dagondesign.com', 'Kandangsapi', 0),
(28, 'Isador', 'Ilyas', '2022-11-03 00:00:00.000000', '625-740-2238', 'iilyasr@amazon.co.jp', 'Suva Reka', 0),
(29, 'Etta', 'Morrall', '2022-10-27 00:00:00.000000', '990-606-0163', 'emorralls@sphinn.com', 'Vicente Guerrero', 0),
(30, 'Joni', 'Cockley', '2022-07-24 00:00:00.000000', '350-639-4006', 'jcockleyt@google.ru', 'Maykor', 0),
(31, 'Misty', 'Chattington', '2022-03-07 00:00:00.000000', '604-511-0068', 'mchattingtonu@comsenz.com', 'Quwa', 0),
(32, 'Baxie', 'Brazelton', '2021-12-05 00:00:00.000000', '209-585-7827', 'bbrazeltonv@google.fr', 'Dzuunmod', 0),
(33, 'Edmon', 'Duiguid', '2022-05-20 00:00:00.000000', '579-916-2171', 'eduiguidw@printfriendly.com', 'Clervaux', 0),
(34, 'Gene', 'Dering', '2022-08-08 00:00:00.000000', '598-308-8052', 'gderingx@ezinearticles.com', 'Arue', 0),
(35, 'Kaitlyn', 'Asbery', '2022-09-25 00:00:00.000000', '461-877-0254', 'kasberyy@feedburner.com', 'Chapayeve', 0),
(36, 'Noelyn', 'Karlsen', '2022-06-12 00:00:00.000000', '399-285-9967', 'nkarlsenz@amazon.co.jp', 'Sallanches', 0),
(37, 'Reeva', 'Boow', '2022-05-22 00:00:00.000000', '551-518-4383', 'rboow10@miitbeian.gov.cn', 'Zamoskvorech’ye', 0),
(38, 'Maximilien', 'Brader', '2022-07-27 00:00:00.000000', '404-926-4813', 'mbrader11@ucoz.com', 'Arteni', 0),
(39, 'Eartha', 'Christofor', '2022-07-30 00:00:00.000000', '559-548-5416', 'echristofor12@webmd.com', 'General Cabrera', 0),
(40, 'Cele', 'Plover', '2022-05-30 00:00:00.000000', '491-418-0267', 'cplover13@qq.com', 'Bella Vista', 0),
(41, 'Salvador', 'Maddern', '2021-11-17 00:00:00.000000', '694-820-9945', 'smaddern14@nytimes.com', 'Pasirpengarayan', 0),
(42, 'Bryn', 'Gainsford', '2022-03-11 00:00:00.000000', '491-938-0156', 'bgainsford15@forbes.com', 'Bègles', 0),
(43, 'Arvin', 'Ninnis', '2022-06-23 00:00:00.000000', '285-184-0313', 'aninnis16@cbc.ca', 'Port Antonio', 0),
(44, 'Carree', 'Colliard', '2022-06-17 00:00:00.000000', '751-943-6534', 'ccolliard17@soundcloud.com', 'Ostrów Mazowiecka', 0),
(45, 'Lucais', 'Gruszka', '2022-05-16 00:00:00.000000', '138-227-6905', 'lgruszka18@biblegateway.com', 'Huangzhai', 0),
(46, 'Eartha', 'Bardnam', '2022-09-11 00:00:00.000000', '123-279-7167', 'ebardnam19@chicagotribune.com', 'Lagarto', 0),
(47, 'Neill', 'Reaman', '2022-05-21 00:00:00.000000', '756-834-6783', 'nreaman1a@salon.com', 'Yancheng', 0),
(48, 'Cynde', 'McCulley', '2022-03-29 00:00:00.000000', '551-144-8351', 'cmcculley1b@wordpress.com', 'Paris La Défense', 0),
(49, 'Vanessa', 'Sleith', '2021-11-13 00:00:00.000000', '717-422-6215', 'vsleith1c@example.com', 'Sindangsari', 0),
(50, 'Lani', 'Lotte', '2022-03-08 00:00:00.000000', '181-358-2327', 'llotte1d@theguardian.com', 'Ko Chan', 0),
(51, 'לקוח', 'חדש', '2022-12-04 18:28:04.275000', 'סבהסבהסב', 'הסבהבסה', 'בסהבסהס', 0),
(52, 'sfgdfgdf', 'gdfgdfgdfg', '2022-12-04 18:32:49.334000', '', 'dfgdf', '', 0),
(65, 'gdfg', 'dfgdfg', '2022-12-04 18:57:18.067000', 'gdfgd', 'dgdf', 'dfgdf', 0);

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `articleId` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `comment` text NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `articleId` (`articleId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `time`, `articleId`, `userName`, `comment`, `isDeleted`) VALUES
(1, '2022-10-19 20:47:46', 2, 'משה קרסו', 'אחלה שיעור', 0),
(2, '2022-10-19 20:57:47', 8, 'קים קרול', 'צמד חמד', 0),
(3, '2022-10-19 21:00:33', 2, 'רגע', 'אחלה יופי', 0),
(4, '2022-10-19 21:02:39', 2, 'יוני יוני', 'מקסים', 0),
(5, '2022-10-19 21:02:57', 8, 'בן עובדיה', 'מצטרף מאנגליה', 0),
(6, '2022-10-19 21:03:31', 8, 'האני', 'מצטרף', 0),
(7, '2022-10-19 21:03:57', 2, 'הקוביה של יאיר', 'הופה הופה', 0),
(8, '2022-10-19 21:04:10', 4, 'רון קזדן', 'אני חוגג באילת', 0),
(9, '2022-10-26 18:04:45', 4, 'בן עובדיה', 'כתבה מושלמת', 0);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `fullName` varchar(30) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(40) NOT NULL,
  `content` varchar(255) NOT NULL,
  `satisfaction` int(11) NOT NULL,
  `happines` int(11) NOT NULL,
  `isCompleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `createTime`, `fullName`, `phone`, `email`, `content`, `satisfaction`, `happines`, `isCompleted`) VALUES
(2, '2022-12-07 18:17:43.890790', 'יעקב', '050505050505', 'aaa@bbbb', 'מגניב בהחלט', 4, 80, 0),
(4, '2022-12-07 20:34:22.347293', 'מישהו', '0505050505', 'AAAדגג', 'דגכדגכד', 4, 80, 0),
(5, '2022-12-07 20:34:28.950872', 'אחר', '0505050505', 'כדכדגדגכ', 'דגכדגכד', 4, 80, 0),
(6, '2022-12-07 20:34:32.699975', 'מגניב', '0505050505', 'כדכדגדגכ', 'דגכדגכד', 4, 80, 0);

-- --------------------------------------------------------

--
-- Table structure for table `new_contact`
--

DROP TABLE IF EXISTS `new_contact`;
CREATE TABLE IF NOT EXISTS `new_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `new_contact`
--

INSERT INTO `new_contact` (`id`, `fullName`, `email`, `phone`, `content`) VALUES
(3, 'קים', 'kim@kim.com', '058-85858454', 'תוכן התגובה');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `category` int(11) DEFAULT NULL,
  `serialNumber` int(11) DEFAULT NULL,
  `date` date NOT NULL,
  `expirationDate` date DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `category`, `serialNumber`, `date`, `expirationDate`, `color`) VALUES
(16, 'מחשב נייד', 5000, NULL, NULL, '2022-10-02', NULL, NULL),
(2, 'מקרר', 3000, 1, NULL, '2022-09-28', NULL, NULL),
(19, 'ועכשיו לא אכפת לנו מהמספור', 1.9, NULL, NULL, '2022-10-02', NULL, NULL),
(17, 'מוצר', 22, NULL, NULL, '2022-10-02', NULL, NULL),
(18, 'מוצר', 56, NULL, NULL, '2022-10-02', NULL, NULL),
(10, 'תנור', 3500, 1, NULL, '2022-10-11', NULL, NULL),
(12, 'מקפיא', 1500, NULL, NULL, '2022-10-02', NULL, NULL),
(15, 'חסה', 6, NULL, NULL, '2022-10-02', NULL, NULL),
(20, 'מקרן קול', 1299, NULL, NULL, '2022-10-02', NULL, NULL),
(21, 'מייבש כביסה', 1199, NULL, NULL, '2022-10-02', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `task` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `createTime`, `task`, `status`, `level`, `isDeleted`) VALUES
(1, '2022-12-11 18:08:49.077726', 'משימה ראשונה', 1, 0, 0),
(3, '2022-12-11 18:10:20.737562', 'ללכת לישון', 2, 0, 0),
(4, '2022-12-11 18:10:20.737562', 'להוסיף כרטיס ברכה', 0, 0, 0),
(6, '2022-12-14 18:28:23.843000', 'מה אמרת?', 0, 0, 1),
(7, '2022-12-14 18:55:31.436000', 'משימה חדשה ומגניבה בטירוף', 1, 0, 1),
(10, '2022-12-14 19:35:27.064000', 'עוד משימה ', 1, 0, 0),
(11, '2022-12-14 19:35:30.830000', 'ועוד אחת', 2, 0, 0),
(12, '2022-12-14 19:35:34.132000', 'וואללה מגניב', 2, 0, 0),
(13, '2022-12-14 20:05:58.850000', 'משימה מהפוסטמן', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(40) NOT NULL,
  `lastName` varchar(40) NOT NULL,
  `birthday` date NOT NULL,
  `city` int(11) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `birthday`, `city`, `phone`, `address`, `email`, `userName`, `password`) VALUES
(1, 'Rafi', 'Ovadia', '2022-09-22', 1, '050-0500500', '', '', 'abc', '123456'),
(4, 'Linoy', 'caslasi', '1989-09-07', 3, '', '', '', 'linoy', '80c9ef0fb86369cd25f90af27ef53a9e');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`articleId`) REFERENCES `articles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
