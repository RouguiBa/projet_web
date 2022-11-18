-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 08 nov. 2022 à 14:02
-- Version du serveur : 5.7.24
-- Version de PHP : 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `objet_projet_web`
--

-- --------------------------------------------------------

--
-- Structure de la table `objets`
--

CREATE TABLE `objets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` text NOT NULL,
  `image` text NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `niveau_zoom` int(11) NOT NULL,
  `texte` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objets`
--

INSERT INTO `objets` (`id`, `nom`, `image`, `x`, `y`, `niveau_zoom`, `texte`) VALUES
(1, 'chateau ', 'C:\\MAMP\\htdocs\\Projet WEB\\images\\Moulinsart.jpg', 47.50023382620123, 1.4579919877970893, 5, 'Bonjour, nous voici au château de Moulinsart où Milou à été aperçu pour la dernière fois. Tu peux chercher aux alentours du château pour voir si jamais il y a des indices qui pourrait nous aider sur la disparition de Milou. '),
(2, 'tintin', 'C:\\MAMP\\htdocs\\Projet WEB\\images\\tintin.png', 47.49947953714484, 1.4582134714668007, 5, 'Tu peux dézoomer pour chercher des indices sur la carte '),
(3, 'cigare ', 'C:\\MAMP\\htdocs\\Projet WEB\\images\\Cigare.jpg', 47.500908552689374, 1.453324219224928, 20, 'Tu viens de trouver... un cigare avec un symbole qui te parait familier, il a du tomber de la poche de quelqu\'un. \r\n...');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `objets`
--
ALTER TABLE `objets`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `objets`
--
ALTER TABLE `objets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
