-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 18, 2022 at 07:55 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `objet_projet_web`
--

-- --------------------------------------------------------

--
-- Table structure for table `objets`
--

CREATE TABLE `objets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` text NOT NULL,
  `image` text NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `niveau_zoom` int(11) NOT NULL,
  `texte` text NOT NULL,
  `type_objet` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objets`
--

INSERT INTO `objets` (`id`, `nom`, `image`, `x`, `y`, `niveau_zoom`, `texte`, `type_objet`) VALUES
(1, 'chateau ', 'C:\\MAMP\\htdocs\\Projet WEB\\images\\Moulinsart.jpg', 47.50023382620123, 1.4579919877970893, 5, 'Bonjour, nous voici au château de Moulinsart où Milou à été aperçu pour la dernière fois. Tu peux chercher aux alentours du château pour voir si jamais il y a des indices qui pourrait nous aider sur la disparition de Milou. ', ''),
(2, 'tintin', 'C:\\MAMP\\htdocs\\Projet WEB\\images\\tintin.png', 47.49947953714484, 1.4582134714668007, 5, 'Tu peux dézoomer pour chercher des indices sur la carte ', ''),
(3, 'cigare ', 'C:\\MAMP\\htdocs\\Projet WEB\\images\\Cigare.jpg', 47.500908552689374, 1.453324219224928, 20, 'Tu viens de trouver... un cigare avec un symbole qui te parait familier, il a du tomber de la poche de quelqu\'un. \r\n...', 'recup'),
(4, 'pyramides', '\"C:\\MAMP\\htdocs\\Projet WEB\\IMG\\pyramides.png\"', 29.976032699378433, 31.13066293777305, 20, '\"Tu viens de trouver une porte pour entrer dans la pyramide mais celle ci est verrouillée par un code.\r\nLe code est en hiéroglyphe, essaie de trouver de l\'aide pour le déchiffrer\"    ', 'b_code'),
(5, 'parchemin', '\"C:\\MAMP\\htdocs\\Projet WEB\\IMG\\parchemin.png\"', 29.975268332595352, 31.137801646173845, 20, '\"Tu viens de trouver un bout de parchemin, qui va pouvoir t\'aider à ouvrir la porte de la pyramide\"\r\n', 'code'),
(6, 'montagne', '\"C:\\MAMP\\htdocs\\Projet WEB\\IMG\\montagne.png\"', 28.310799149712196, 85.68367766668538, 20, '\"Pour accéder à au sommet de la montagne tu doit être bien équipé, cherche trois objets qui t\'aiderons dans ton ascension\" ', 'b_objet'),
(7, 'boussole ', '\"C:\\MAMP\\htdocs\\Projet WEB\\IMG\\bousole.png\"', 27.704874591822673, 85.30792381919873, 20, '\"Tu viens de trouver une boussole, elle va être rangé dans ton inventaire\"', 'recup');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `objets`
--
ALTER TABLE `objets`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `objets`
--
ALTER TABLE `objets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
