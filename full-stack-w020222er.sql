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
-- Database: `full-stack-w020222er`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `addedTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `publishedTime` datetime NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `content` text,
  `reporterId` int(11) NOT NULL DEFAULT '0',
  `categoryId` int(11) NOT NULL DEFAULT '0',
  `image` varchar(150) NOT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `publishedTime` (`publishedTime`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `addedTime`, `publishedTime`, `title`, `description`, `content`, `reporterId`, `categoryId`, `image`, `isDeleted`) VALUES
(2, '2022-09-21 16:47:46', '2022-09-21 00:00:00', 'המלפפון שהפך לחציל', 'זה סיפור מאוד מרתק', '', 4, 0, 'img (8).jpg', 0),
(3, '2022-09-21 16:47:46', '2022-09-21 16:47:46', 'שיעור אחרון ב-MySQL', 'זה שיעור סיכום', '', 1, 0, '', 1),
(4, '2022-09-21 16:47:46', '2022-09-21 16:47:46', 'בסוף השיעור יישלח אליכם ה-DB', 'כדאי לכם לחכות', '', 4, 0, '', 1),
(8, '2022-09-21 16:47:46', '2022-09-21 00:00:00', 'התפוח שהפך לתפוז', 'זה סיפור מעפאן', '', 1, 0, 'img (9).jpg', 0),
(9, '2023-03-22 19:45:47', '2023-03-22 00:00:00', 'וואלה מגניב', 'כתבה שהוספנו', NULL, 0, 0, 'img (12).jpg', 0),
(10, '2023-03-22 20:51:49', '2023-03-22 00:00:00', 'dsfdsf', 'dsfdsfdsfds', NULL, 0, 0, 'img (8).jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `fullName` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `body` varchar(255) NOT NULL,
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `createTime`, `fullName`, `email`, `body`, `isDeleted`) VALUES
(1, '2023-03-19 18:36:12.900318', 'אלישיב גכגדךלחכגדמתח', 'a@a', 'dfjcsdlkjlkds lks;k fdlk lj', 1),
(2, '2023-03-19 18:38:19.374158', 'אלישיב גכגדךלחכגדמתח', 'a@a.c', 'dfjcsdlkjlkds lks;k fdlk lj', 1),
(3, '2023-03-19 18:41:20.635212', 'אלישיב גכגדךלחכגדמתח', 'a@a.c', 'dfjcsdlkjlkds lks;k fdlk lj', 1),
(4, '2023-03-19 18:42:06.186112', 'fdsfds', 'fdsf@vdsvfsd.com', 'fdsfds', 1),
(5, '2023-03-19 18:54:55.026772', 'דניאלובסקי פרטרשבסקי', 'yuri@caduri.com', 'תוכן תוכן', 1),
(6, '2023-03-22 19:58:36.964174', 'קים', 'kim@kim.com', 'תוכן חדש', 0),
(7, '2023-03-22 20:06:02.472217', 'אלישיב', 'aaa@aaaa.ccc', 'fdsfdsfs', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `imageName` varchar(50) DEFAULT NULL,
  `isDeleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `category`, `imageName`, `isDeleted`) VALUES
(1, 'מלפפון', 8.5, 2, NULL, NULL, 0),
(2, 'עגבניה', 9.9, 0, NULL, NULL, 0),
(3, 'גמבה', 12, 0, NULL, NULL, 0),
(4, 'חציל', 17, 2, NULL, NULL, 1),
(5, 'קישוא', 7.7, 0, NULL, NULL, 0),
(6, 'חסה', 6, 2, NULL, NULL, 0),
(7, 'מחשב', 2000, 10, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createTime` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `userId` int(11) NOT NULL,
  `task` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `level` int(11) NOT NULL DEFAULT '0',
  `remark` varchar(200) NOT NULL DEFAULT '',
  `isDeleted` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `createTime`, `userId`, `task`, `status`, `level`, `remark`, `isDeleted`) VALUES
(1, '2023-01-22 18:29:58.915588', 11, 'משימה ראשונה', 0, 2, '', 1),
(2, '2023-01-22 19:28:41.652979', 11, 'עוד משימה', 2, 0, '', 1),
(3, '2023-01-22 20:02:43.429863', 11, 'להציג אינדיקציה עיצובית בהתאם לרמת העדיפות', 2, 0, '', 0),
(4, '2023-01-22 20:03:01.053910', 11, 'לשפר המון את העיצוב של הדף', 2, 1, '', 0),
(5, '2023-01-22 20:03:12.368762', 11, 'להמיר את ה-CSS ל-SCSS', 2, 0, '', 0),
(6, '2023-01-22 20:03:24.479460', 11, 'ליצור סל מחזור ולאפשר לשחזר משימות', 0, 0, '', 1),
(7, '2023-01-22 20:03:55.770932', 11, 'ליצור סל מיחזור ולאפשר למחזר', 2, 0, '', 0),
(8, '2023-01-22 20:04:27.365919', 11, 'לוודא שאין כפילויות', 2, 1, '', 0),
(9, '2023-01-22 20:05:00.805090', 11, 'לאפשר קריאות ל-API רק לבעלי הרשאות', 2, 0, '', 0),
(10, '2023-01-29 18:43:45.383611', 11, 'לוודא שאי ן כפילויות', 0, 0, '', 1),
(11, '2023-01-29 20:21:48.334901', 11, 'לגרום לכך שהמשימות יהיו פר משתמש', 2, 2, '', 0),
(12, '2023-01-29 20:38:10.433049', 10, 'משימה של דני שובבני', 0, 2, '', 0),
(13, '2023-01-29 20:46:46.010015', 9, 'המשימה של בן', 2, 1, '', 1),
(14, '2023-01-29 20:46:48.958269', 9, 'המשימה של בת', 0, 2, '', 1),
(15, '2023-01-29 20:47:35.551090', 9, 'גדכדגכגד', 0, 0, '', 1),
(16, '2023-01-30 18:51:37.862236', 10, 'משימה של אביב', 2, 0, '', 0),
(17, '2023-01-30 18:52:20.690429', 10, 'יש חברה של תומר', 1, 0, '', 0),
(18, '2023-01-30 18:52:54.577513', 10, 'משימה נוספת', 0, 0, '', 0),
(19, '2023-02-05 17:42:50.962775', 9, 'ליצור תפריט עליון ותפריט צד', 2, 0, 'יופי טופי', 0),
(20, '2023-02-05 17:43:18.610939', 9, 'וולידציה בצד שרת באמצעות Joi', 0, 0, '', 0),
(21, '2023-02-05 17:43:37.785398', 9, 'בתוך המשימות לאפשר לכתוב הערות', 2, 2, 'עכשיו אנחנו בודקים אם זה עובד', 0),
(22, '2023-02-05 17:44:56.641474', 9, 'ליצור חנות וירטואלית המוסיפה פריטים לסל הקניות', 2, 0, '', 0),
(23, '2023-02-05 19:42:39.451343', 9, 'לעשות דשבורד בדף הבית', 2, 2, '', 0),
(24, '2023-02-05 21:18:06.050449', 9, 'להציג את הפריטים לפי קטגוריה', 0, 0, '', 1),
(25, '2023-02-05 21:18:10.924562', 9, 'להציג את כל הפריטים', 2, 0, '', 0),
(26, '2023-02-05 21:18:25.217895', 9, 'ליצור API לחנות', 2, 0, 'קבלת המוצרים\nהוספת מוצר + העלאת תמונה\nעריכת מוצר\nמחיקת מוצר\n(סל מחזור)\nשמירת הזמנות', 0),
(27, '2023-02-08 19:40:07.352553', 9, 'bcrypt', 2, 0, '', 0),
(28, '2023-02-12 19:00:04.803661', 9, 'להציג כמה פריטים יש בסל הקניות', 2, 1, '', 0),
(29, '2023-02-12 19:00:17.043599', 9, 'להציג את הפריטים בתוך סל הקניות', 2, 2, '', 0),
(30, '2023-02-12 20:15:46.487875', 9, 'להציג בסל הקניות את המחיר הכולל לפני הנחה ואחרי הנחה', 2, 0, '', 0),
(31, '2023-02-12 20:15:53.892081', 9, 'להציג סיכום כללי', 2, 2, 'פאדיחה', 0),
(32, '2023-02-22 18:07:02.644049', 9, 'שלום', 0, 0, '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fullName` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(30) NOT NULL,
  `userName` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `createdTime`, `fullName`, `email`, `userName`, `password`, `isAdmin`) VALUES
(1, '2023-01-11 20:34:00', 'אלישיב לרנר', 'abc@abc', 'dddd', '202cb962ac59075b964b07152d234b70', 0),
(2, '2023-01-11 20:52:04', 'אלישיב קוזבסקי', 'abc@abc', 'bbb', '4297f44b13955235245b2497399d7a93', 0),
(5, '2023-01-11 21:10:45', 'יעקב ש', 'aaa@ddd', 'ccc', '4297f44b13955235245b2497399d7a93', 0),
(6, '2023-01-15 17:45:03', 'חיים דידי', 'aaa@abc', 'abcdef', 'dc483e80a7a0bd9ef71d8cf973673924', 0),
(7, '2023-01-15 18:14:28', 'דני שובבני', 'rrr@eee', 'erer', 'b59c67bf196a4758191e42f76670ceba', 0),
(8, '2023-01-15 18:34:37', 'דני שובבני', 'rrr@eee', 'jjj', '698d51a19d8a121ce581499d7b701668', 0),
(9, '2023-01-15 18:43:36', 'בן עובדיה', 'rrr@eee', 'aaa', '74b87337454200d4d33f80c4663dc5e5', 0),
(10, '2023-01-15 18:43:54', 'דני שובבני', 'rrr@eee', 'aa', '74b87337454200d4d33f80c4663dc5e5', 0),
(11, '2023-01-18 19:24:04', 'אלישיב לרנר', 'a@a', 'a', '0cc175b9c0f1b6a831c399e269772661', 1),
(13, '2023-03-15 20:31:29', 'משה קרסו', 'm@m', '', '6f8f57715090da2632453988d9a1501b', 0),
(14, '2023-03-15 20:32:40', 'רון קזדן', 'r@r', '', '4b43b0aee35624cd95b910189b3dc231', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
