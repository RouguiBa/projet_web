-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 03 déc. 2022 à 18:31
-- Version du serveur : 5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tintin_objets`
--

-- --------------------------------------------------------

--
-- Structure de la table `hall_of_fame`
--

CREATE TABLE `hall_of_fame` (
  `pseudo` text NOT NULL,
  `temps` time NOT NULL,
  `points` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `hall_of_fame`
--

INSERT INTO `hall_of_fame` (`pseudo`, `temps`, `points`) VALUES
('Rougui', '00:00:00', 0),
('Rougui', '00:00:00', 0),
('', '00:00:00', 0),
('', '00:00:00', 0),
('Rougui', '00:00:00', 0),
('Rougui', '00:00:00', 0),
('Rougui', '00:00:00', 0),
('sdfzd', '00:00:00', 0),
('sdfzd', '00:00:00', 0),
('sdfzd', '00:00:00', 0),
('sdfzd', '00:00:00', 0),
('sdfzd ', '00:00:33', 0),
('bj', '00:00:00', 0),
('bj ', '00:00:33', 0),
('jplkjm', '00:00:00', 0),
('jplkjm ', '00:03:55', 0),
('sdfgh', '00:00:00', 0),
('sdfgh ', '00:07:12', 0),
('sdfgh', '00:00:00', 0),
('efdesolkfp^ùse ', '00:00:27', 3573),
('efdesolkfp^ùse ', '00:00:35', 3565),
('Rougui ', '00:03:06', 3414),
('Rougui ', '00:00:24', 3576);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
