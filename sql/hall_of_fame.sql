-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : dim. 04 déc. 2022 à 00:05
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
('Rougui', '00:05:10', 3290),
('Ana', '00:07:03', 3177),
('Castafiore', '00:10:27', 2973),
('Capitaine Haddock', '00:04:35', 3325),
('Professeur Tournesol', '00:03:06', 3414),
('Duppont', '00:06:24', 3216),
('Duppond', '00:06:24', 3216),
('Rougui ', '00:00:32', 3568),
('Rougui ', '00:00:34', 3566);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
