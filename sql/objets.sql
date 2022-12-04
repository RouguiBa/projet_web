-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2022 at 12:58 AM
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
-- Database: `tintin_objets`
--

-- --------------------------------------------------------

--
-- Table structure for table `objets`
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
  `permet_de_debloquer` int(11) DEFAULT NULL,
  `coord_x_suivant` double DEFAULT NULL,
  `coord_y_suivant` double DEFAULT NULL,
  `est_bloque_par` text,
  `replique_debloque` text,
  `rep_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `objets`
--

INSERT INTO `objets` (`id`, `nom`, `img`, `x`, `y`, `niveau_zoom`, `replique`, `type_objet`, `permet_de_debloquer`, `coord_x_suivant`, `coord_y_suivant`, `est_bloque_par`, `replique_debloque`, `rep_code`) VALUES
(1, 'cigare ', '../IMG/Cigare.png', 47.500908552689374, 1.453324219224928, 17, 'Tu viens de trouver... Un cigare avec un symbole qui te parait familier. En effet, le symbole ressemble beaucoup à celui des trafiquants d\'armes et d\'opium que Tintin à arrêté en Égypte ! Il a dû tomber de la poche de quelqu\'un. \n...\nNous devons nous rendre en Égypte !<p>Allons prendre l\'avion à l\'aéroport de Tour</p>', 'normal', 0, 0, 0, '0', 'rien', 0),
(2, 'pyramides', '../IMG/pyramides.png', 29.976032699378433, 31.13066293777305, 17, '<p>Tu viens de trouver une porte pour entrer dans la pyramide, mais celle-ci est verrouillée par un code.\nLe code est en hiéroglyphe, essaie de trouver le code non loin de l\'entrée de Gizeh.</p>\n<p><img src=\"../IMG/parchemin_deplie.png\" width=\"350\" height=\"200\"></p><p><form id=\"myForm5130\" action=\"#\" method=\"get\"><label>Mot de passe (4 chiffres maximum) :</label>\n<input type=\"tel\" id=\"pass5130\" name=\"password\" maxlength=\"4\" required></form></p>', 'b_code', 8, 0, 0, '3', '<p>Bravo ! Cet objet a été débloqué.</p><p>\"Tu viens de trouver des drapeaux de prière tibétains souvent suspendus au sommet des montagnes ou à l\'extérieur des temples dans la région de l\'Himalaya. Tu sais donc où il te reste à aller pour poursuivre ton enquête\"</p><p><img src=\"../IMG/drapeaux.png\" width=\"400\" height=\"200\"></p><p>Prends l\'avion qui vient d\'apparaître dans la pyramide pour te rendre au Tibet.</p>', 5130),
(3, 'parchemin', '../IMG/parchemin.png', 29.975268332595352, 31.137801646173845, 17, '<p>Tu viens de trouver un bout de parchemin, qui va pouvoir t\'aider à ouvrir la porte de la pyramide.</p> <p><img src=\"../IMG/code_parchemin.png\" width=\"200\" height=\"500\"></p>\n', 'code', 2, 0, 0, '0', 'rien', 0),
(4, 'montagne', '../IMG/montagne.png', 28.310799149712196, 85.68367766668538, 17, '<p>Pour accéder au sommet de la montagne, tu dois être bien équipé d\'une corde et d\'une pioche. Si tu n\'en possèdes pas, retourne au sud de la ville de Kathmandou pour t\'en procurer</p><p><input id=\"button10\" type=\"button\" value=\"Débloquer\"></p> ', 'b_objet', 0, 0, 0, '10', '<p>Bravo ! Tu es arrivé au sommet de la montagne !</p><p>Malheureusement pour nous, Milou n\'y est pas !</p><p>Cependant, tu as pu trouver une statue inca, un indice sur sa nouvelle position.</p><p><img src=\"../IMG/statue.png\" width=\"200\" height=\"300\"></p><p>Prends l\'avion et va au Perou.</p>', 0),
(5, 'boussole ', '../IMG/boussole.png', 27.692296234825037, 85.30230524037455, 17, '<p>Tu viens de trouver une boussole, elle va être rangée dans ton inventaire.</p> <p>Allons désormais chercher les autres objets ! Cherche un piolet et une corde au sud de la ville.</p>', 'recup', 9, 0, 0, '0', 'rien', 0),
(6, 'avion', '../IMG/avion.png', 47.425652, 0.721848, 12, 'Allons au Caire retrouver Milou', 'transport', 0, 30.111992, 31.400336, '0', 'rien', 0),
(7, 'egypte', '../IMG/tintin.png', 30.111992, 31.400336, 16, 'Bienvenue au Caire, c\'est ici que nous avons pu mettre la main sur la société secrète de trafiquants d\'armes et d\'opium. Selon certains témoins, Milou aurait été aperçu avec un homme à la pyramide de Khéphren non loin de Gizeh.', 'normal', 0, 0, 0, '0', 'rien', 0),
(8, 'avion2', '../IMG/avion.png', 29.975303641086846, 31.131071372832434, 14, 'Allons au Népal retrouvé Milou', 'pas_affi', 0, 27.704549, 85.318751, '2', 'rien', 0),
(9, 'sac_a_dos', '../IMG/sac.png', 27.697296, 85.356955, 17, '<p>Cet objet est bloqué par un autre objet, pour y accéder appuyez sur le bouton \"débloquer\" après avoir sélectionné le bon objet dans l\'inventaire.</p><p><input id=\"button5\" type=\"button\" value=\"Débloquer\"></p>', 'b_objet', 0, 0, 0, '5', 'Bravo ! Tu viens de trouver un sac à dos, dans lequel tu as pu ranger ta boussole, cela va pouvoir t\'être utile à transporter toutes tes affaires lors de ton ascension. <p>Mais dans la montagne enneigée, tu auras besoin d\'une corde et d\'un piolet pour escalader les parois abruptes de la montagne...</p><p>Tu peux désormais te rendre à la montagne pour l\'escalader prends l\'avion qui vient d\'apparaître non loin du sac à dos.</p>', 0),
(10, 'piolet_et_corde', '../IMG/corde_piolet.png', 27.662178, 85.322936, 14, 'Une corde et un piolet, c\'est très important pour gravir une montagne avec sécurité. <p>Tu peux aller ranger tout ça dans un sac à dos que tu pourras trouver à l\'aéroport.</p>', 'recup', 4, 0, 0, '0', 'rien', 0),
(11, 'Nepal', '../IMG/tintin.png', 27.704549, 85.318751, 17, 'Bienvenue à Kathmandou, avant d\'aller escalader la montagne du Tibet, il va falloir t\'équiper !\n<p>Dans cette ville, il y a trois objets.</p>\n<p>Un à la confluence des rivières Bagmati et Bishnumati.</p>\n<p>Un autre au sud de la ville.</p>\n<p>Et le dernier à l\'aéroport de la ville.</p>\n<p>Nous te conseillons de les chercher dans l\'ordre listé ci-dessus.</p>', 'normal', 0, 0, 0, '0', 'rien', 0),
(12, 'machu pichu', '../IMG/machu_pichu.png', -13.16317, -72.544909, 17, '<p>Bienvenue au Pérou, plus précisément au Machu Picchu, ancienne cité inca. Milou se trouve bien ici selon quelques témoins. Mais pour rentrer dans la cité, tu devras débloquer ce code. Tu peux chercher au temple de La Luna plus au nord.</p><p><form id=\"myForm2724\" action=\"#\" method=\"get\"><label>Mot de passe (4 chiffres maximum):</label>\n<input type=\"tel\" id=\"pass2724\" name=\"password\" maxlength=\"4\" required></form></p></div>', 'b_code', 14, 0, 0, '13', '<p>Tu arrives bientôt au bout de cette aventure !</p>', 2724),
(13, 'quipu', '../IMG/quipu.png', -13.152007399619945, -72.54641408089775, 17, '<p>Tu viens de trouver un Quipu, c\'est un outil de comptabilité Inca qui signifie \"nœud\" en quechua.</p><p>Compte les nœuds présents sur chaque corde. Cela représente un chiffre du code.</p> <p><img src=\"../IMG/quipu_deplie.png\" width=\"350\" height=\"200\"></p>', 'code', 12, 0, 0, '0', '0', 0),
(14, 'Milou', '../IMG/reunion.jpg', -13.162439, -72.54614, 17, '<p>Félicitations à toi pour avoir retrouvé Milou !</p>\n<p>Ce dernier souhaitait voir Tintin retourner dans quelques endroits merveilleux dans lesquels ils ont pu vivre ensembles des expériences mémorables, et faire de magnifiques rencontres !<p>\n<p>Et on peut dire qu’il a réussi son coup !<p>\n<p>Depuis le château de Moulinsart, jusqu\'au sommet du Tibet en passant par les magnifiques pyramides d’Égypte et la fabuleuse ancienne cité Inca, cette aventure a été riche en adrénaline et tu as surtout su te montrer à la hauteur.</p>\n<p><img src=\"../IMG/milou_tintin_reunion.png\" width=\"250\" height=\"300\"></p><p><input id=\"buttonfin\" type=\"button\" value=\"Terminer le jeu\"></p>', 'pas_affi', 0, 27.704549, 85.318751, '12', '', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `objets`
--
ALTER TABLE `objets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `objets`
--
ALTER TABLE `objets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
