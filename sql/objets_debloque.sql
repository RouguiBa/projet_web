-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : dim. 04 déc. 2022 à 00:06
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
-- Structure de la table `objets_debloque`
--

CREATE TABLE `objets_debloque` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` text NOT NULL,
  `x` float NOT NULL,
  `y` float NOT NULL,
  `img` text,
  `type_objet` text,
  `id_debloqueur` text,
  `niveau_zoom` int(11) NOT NULL,
  `coord_x_suivant` float NOT NULL,
  `coord_y_suivant` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objets_debloque`
--

INSERT INTO `objets_debloque` (`id`, `nom`, `x`, `y`, `img`, `type_objet`, `id_debloqueur`, `niveau_zoom`, `coord_x_suivant`, `coord_y_suivant`) VALUES
(1, 'avion Tibet', 28.3108, 85.6867, '../IMG/avion.png', 'non_affi', '4', 17, -13.1632, -72.5449),
(2, 'avion Kathmandu', 27.6949, 85.3595, '../IMG/avion.png', 'non_affi', '9', 17, 28.3108, 85.6837);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `objets_debloque`
--
ALTER TABLE `objets_debloque`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `objets_debloque`
--
ALTER TABLE `objets_debloque`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
