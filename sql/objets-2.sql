-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 23 nov. 2022 à 19:03
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
-- Structure de la table `objets`
--

CREATE TABLE `objets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nom` text NOT NULL,
  `img` text NOT NULL,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `niveau_zoom` int(11) NOT NULL,
  `replique` text NOT NULL,
  `type_objet` text NOT NULL,
  `id_suivant` int(11) DEFAULT NULL,
  `coord_x_suivant` double DEFAULT NULL,
  `coord_y_suivant` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objets`
--

INSERT INTO `objets` (`id`, `nom`, `img`, `x`, `y`, `niveau_zoom`, `replique`, `type_objet`, `id_suivant`, `coord_x_suivant`, `coord_y_suivant`) VALUES
(1, 'chateau ', '../IMG/Moulinsart.jpg', 47.50023382620123, 1.4579919877970893, 19, 'Bonjour, nous voici au château de Moulinsart où Milou à été aperçu pour la dernière fois. Tu peux chercher aux alentours du château pour voir si jamais il y a des indices qui pourrait nous aider sur la disparition de Milou. ', 'recup', 0, 0, 0),
(2, 'tintin', '../IMG/tintin.png', 47.49947953714484, 1.4582134714668007, 19, 'Tu peux dézoomer et chercher des indices vers la rivière ', 'normal', 0, 0, 0),
(3, 'cigare ', '../IMG/Cigare.png', 47.500908552689374, 1.453324219224928, 19, 'Tu viens de trouver... un cigare avec un symbole qui te parait familier. En effet, le symbole ressemble beaucoup à celui des trafiquants d\'armes et d\'opium que Tintin à arrêté en Egypte! Il a du tomber de la poche de quelqu\'un. \r\n...\r\nNous devons nous rendre en Egypte, cherchons notre moyen de transport non loin de la rivière!', 'recup', 0, 0, 0),
(4, 'pyramides', '../IMG/pyramides.png', 29.976032699378433, 31.13066293777305, 19, '<p>Tu viens de trouver une porte pour entrer dans la pyramide mais celle ci est verrouillée par un code.\r\nLe code est en hiéroglyphe, essaie de trouver de l\'aide pour le déchiffrer</p>\r\n<p><img src=\"../IMG/parchemin_deplie.png\" width=\"200\" height=\"300\"></p><p><form action=\"#\" method=\"post\" id=\"connect\">\r\n    <input type=\"password\" name=\"pwd\" id=\"pwd\" />\r\n    <input type=\"submit\" name=\"submit\" />\r\n</form></p>\r\n  ', 'b_code', 0, 0, 0),
(5, 'parchemin', '../IMG/parchemin.png', 29.975268332595352, 31.137801646173845, 19, '<p>Tu viens de trouver un bout de parchemin, qui va pouvoir t\'aider à ouvrir la porte de la pyramide</p> <p><img src=\"../IMG/code_parchemin.png\" width=\"200\" height=\"300\"></p>\r\n', 'recup', 0, 0, 0),
(6, 'montagne', '../IMG/montagne.png', 28.310799149712196, 85.68367766668538, 20, '\"Pour accéder à au sommet de la montagne tu doit être bien équipé, cherche trois objets qui t\'aiderons dans ton ascension\" ', 'b_objet', 0, 0, 0),
(7, 'boussole ', '../IMG/boussole.png', 27.704874591822673, 85.30792381919873, 20, '\"Tu viens de trouver une boussole, elle va être rangé dans ton inventaire\"', 'recup', 0, 0, 0),
(8, 'avion', '../IMG/avion.png', 47.501085, 1.453779, 18, 'Allons au Caire retrouvé Milou', 'transport', 4, 30.111992, 31.400336),
(9, 'egypte', '../IMG/tintin.png', 30.111992, 31.400336, 16, 'Bienvenue au Caire, c\'est ici que nous avons pu mettre la main sur la société secrète de trafiquants d\'armes et d\'opium. Selon certains témoins, Milou aurait été apperçu avec un homme vers les pyramides de Gizeh', 'normal', 0, 0, 0);

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
