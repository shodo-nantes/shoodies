-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : ven. 17 juin 2022 à 09:37
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
-- Base de données : `Shoodies`
--

-- --------------------------------------------------------

--
-- Structure de la table `photo`
--

CREATE TABLE `photo` (
  `id` int(10) UNSIGNED NOT NULL,
  `url_photo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `photo`
--

INSERT INTO `photo` (`id`, `url_photo`) VALUES
(1, 'casquette-noire-1.jpg'),
(2, 'casquette-bleu-1.jpeg'),
(3, 'casquette-bleu-2.jpeg'),
(4, 'gourde-1.jpg'),
(5, 'sac-a-dos-1.jpg'),
(6, 't-shirt-rouge-1.jpg'),
(7, 't-shirt-rouge-2.jpg'),
(8, 't-shirt-rouge-3.jpg'),
(9, 't-shirt-noir-1.jpg'),
(10, 't-shirt-noir-2.jpg'),
(11, 'sweatshirt-1.jpg'),
(12, 'sweatshirt-2.jpg'),
(13, 'mug-1.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `photo_product`
--

CREATE TABLE `photo_product` (
  `id_product` int(10) UNSIGNED NOT NULL,
  `id_photo` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `photo_product`
--

INSERT INTO `photo_product` (`id_product`, `id_photo`) VALUES
(1, 1),
(2, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(5, 7),
(5, 8),
(6, 9),
(6, 10),
(7, 11),
(7, 12),
(8, 13);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `name`, `type`) VALUES
(1, 'Casquette noire', 'vetement'),
(2, 'Casquette bleu', 'vetement'),
(3, 'Gourde', 'objet'),
(4, 'Sac à dos', 'objet'),
(5, 't-shirt rouge', 'vetement'),
(6, 't-shirt noir', 'vetement'),
(7, 'Sweatshirt', 'vetement'),
(8, 'Mug', 'objet');

-- --------------------------------------------------------

--
-- Structure de la table `size`
--

CREATE TABLE `size` (
  `id` int(10) UNSIGNED NOT NULL,
  `size` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `size`
--

INSERT INTO `size` (`id`, `size`) VALUES
(1, 'taille unique'),
(2, 'S'),
(3, 'M'),
(4, 'L'),
(5, 'XL');

-- --------------------------------------------------------

--
-- Structure de la table `size_product`
--

CREATE TABLE `size_product` (
  `id_product` int(10) UNSIGNED NOT NULL,
  `id_size` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `size_product`
--

INSERT INTO `size_product` (`id_product`, `id_size`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(8, 1),
(5, 2),
(6, 2),
(7, 2),
(5, 3),
(6, 3),
(7, 3),
(5, 4),
(6, 4),
(7, 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `photo_product`
--
ALTER TABLE `photo_product`
  ADD PRIMARY KEY (`id_product`,`id_photo`),
  ADD KEY `fk_id_url_photo` (`id_photo`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `size_product`
--
ALTER TABLE `size_product`
  ADD PRIMARY KEY (`id_product`,`id_size`),
  ADD KEY `fk_size_product` (`id_size`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `size`
--
ALTER TABLE `size`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `photo_product`
--
ALTER TABLE `photo_product`
  ADD CONSTRAINT `fk_id_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_id_url_photo` FOREIGN KEY (`id_photo`) REFERENCES `photo` (`id`);

--
-- Contraintes pour la table `size_product`
--
ALTER TABLE `size_product`
  ADD CONSTRAINT `fk_product` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_size_product` FOREIGN KEY (`id_size`) REFERENCES `size` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
