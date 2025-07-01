-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 01 juil. 2025 à 14:36
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `masque`
--

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
CREATE TABLE IF NOT EXISTS `commentaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `commentaire` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `masque_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `auteur` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_67F068BCEE50B206` (`masque_id`),
  KEY `IDX_67F068BCA76ED395` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `commentaire`, `masque_id`, `user_id`, `created_at`, `auteur`) VALUES
(7, 'test', 28, 2, '2025-07-01 12:29:20', 'toto@toto.com'),
(8, 'test', 28, 2, '2025-07-01 12:32:29', 'toto@toto.com');

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sujet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20250625091536', '2025-06-26 07:01:11', 112),
('DoctrineMigrations\\Version20250625105113', '2025-06-26 07:01:11', 10),
('DoctrineMigrations\\Version20250625105302', '2025-06-26 07:01:11', 8),
('DoctrineMigrations\\Version20250625114941', '2025-06-26 07:01:11', 5),
('DoctrineMigrations\\Version20250626071928', '2025-06-26 07:19:38', 19),
('DoctrineMigrations\\Version20250626072302', '2025-06-26 07:48:49', 115),
('DoctrineMigrations\\Version20250626083509', '2025-06-26 08:35:14', 94),
('DoctrineMigrations\\Version20250626132339', '2025-06-26 13:23:45', 37),
('DoctrineMigrations\\Version20250626141651', '2025-06-26 14:16:55', 29),
('DoctrineMigrations\\Version20250626150704', '2025-06-26 15:07:16', 18),
('DoctrineMigrations\\Version20250627071348', '2025-06-27 07:13:54', 153),
('DoctrineMigrations\\Version20250627120311', '2025-06-27 12:03:20', 160),
('DoctrineMigrations\\Version20250701091003', '2025-07-01 09:10:09', 33),
('DoctrineMigrations\\Version20250701091550', '2025-07-01 09:15:57', 95),
('DoctrineMigrations\\Version20250701092419', '2025-07-01 09:24:23', 25);

-- --------------------------------------------------------

--
-- Structure de la table `masque`
--

DROP TABLE IF EXISTS `masque`;
CREATE TABLE IF NOT EXISTS `masque` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `caracteristique` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valeur` int NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by_id` int DEFAULT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_E2D3F6ABB03A8386` (`created_by_id`),
  KEY `IDX_E2D3F6ABA76ED395` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `masque`
--

INSERT INTO `masque` (`id`, `nom`, `caracteristique`, `valeur`, `description`, `image_name`, `updated_at`, `created_by_id`, `created_at`, `user_id`) VALUES
(21, 'Masque de Shen', 'Ninja, League of Legends, LoL, Ionien', 250, 'Gardien silencieux, force et discipline à chaque mouvement.', 'masque-shen-686396a2dd212250278055.jpg', '2025-07-01 08:04:50', 4, '2025-07-01 08:04:50', 4),
(22, 'Masque de Jhin', 'Artiste, League of Legends, LoL, Ionien', 444, 'Art et mort s\'entrelacent dans une symphonie mortelle.', 'masque-jhin-6863972477207748779905.jpg', '2025-07-01 08:07:00', 5, '2025-07-01 08:07:00', 5),
(23, 'Masque de Jhin — Blood Moon', 'Artiste, League of Legends, LoL, Ionien, Blood Moon, Rituel, Ténébreux', 444, 'Art meurtrier sous la lune rouge, chaque tir devient un rituel sanglant.', 'jhin-blood-moon-6863982ce43a3822751233.jpg', '2025-07-01 08:11:24', 5, '2025-07-01 08:11:24', 5),
(24, 'Masque de Shen — Blood Moon', 'Ninja, League of Legends, LoL, Ionien, Blood Moon, Protecteur, Occulte', 320, 'Gardien silencieux, esprit rituel prêt à frapper sous la lune rouge.', 'shen-blood-moon-68639a53dd177695728160.png', '2025-07-01 08:20:35', 4, '2025-07-01 08:20:35', 4),
(25, 'Masque du Loup', 'Spirituel, League of Legends, LoL, Runeterra', 180, 'Le souffle final, messager entre la vie et l’au-delà.', 'kindred-loup-68639b8551fdc933559484.jpg', '2025-07-01 08:25:41', 6, '2025-07-01 08:25:41', 6),
(26, 'Masque d\'Agneau', 'Spirituel, League of Legends, LoL, Runeterra, Kindred, Éthéré, Guide', 280, 'Symbole pur et éternel, l\'Agneau guide paisiblement les âmes vers la fin, incarnant la grâce dans la mort et la danse entre vie et au-delà.', 'kindred-agneaux-68639bc39cd51055405750.jpg', '2025-07-01 08:26:43', 6, '2025-07-01 08:26:43', 6),
(27, 'Masque de Zed', 'Ténébreux, League of Legends, LoL, Ionien, Assassin, Ombres, Occulte', 290, 'Artefact interdit des ombres, le masque de Zed incarne la haine, le pouvoir et l\'ambition pure, prêt à consumer quiconque ose défier la voie obscure.', 'masque-zed-68639c8005b0a484226768.png', '2025-07-01 08:29:52', 7, '2025-07-01 08:29:42', 7),
(28, 'Masque de Pyke — Blood Moon', 'Vengeur, League of Legends, LoL, Blood Moon, Bilgewater, Assassin, Spectral, Occulte', 340, 'Vengeur spectral invoqué par la lune rouge, Pyke chasse les traîtres, frappant d\'une lame spectrale et laissant derrière lui un sillage d’ombres et de terreur.', 'pyke-masque-68639dfd4a092515050558.jpg', '2025-07-01 08:36:13', 8, '2025-07-01 08:36:13', 8),
(29, 'Masque Bantu', 'Africain, Traditionnel, Bantu, Communautaire, Protecteur, Spirituel', 180, 'Symbole protecteur célébrant l\'unité et l’esprit ancestral des peuples Bantu.', 'bantu-68639e96b8c6b241019340.jpg', '2025-07-01 08:38:46', 9, '2025-07-01 08:38:46', 9),
(30, 'Masque Yoruba', 'Africain, Rituel, Yoruba, Spirituel, Mystique, Divin', 180, 'Connecté aux orishas, ce masque invoque force divine et bénédiction rituelle.', 'yoruba-68639efc8d73f946315481.jpg', '2025-07-01 08:40:28', 10, '2025-07-01 08:40:28', 10),
(31, 'Masque Dogon', 'Africain, Dogon, Astral, Mystique, Spirituel, Traditionnel', 200, 'Guide cosmique reliant les étoiles et les ancêtres au monde des vivants.', 'dogon-68639f6755bf0696626895.jpg', '2025-07-01 08:42:15', 11, '2025-07-01 08:42:15', 11);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

DROP TABLE IF EXISTS `messenger_messages`;
CREATE TABLE IF NOT EXISTS `messenger_messages` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `available_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `delivered_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  PRIMARY KEY (`id`),
  KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  KEY `IDX_75EA56E016BA31DB` (`delivered_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `notation`
--

DROP TABLE IF EXISTS `notation`;
CREATE TABLE IF NOT EXISTS `notation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `masque_id` int NOT NULL,
  `note` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_268BC95A76ED395` (`user_id`),
  KEY `IDX_268BC95EE50B206` (`masque_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `notation`
--

INSERT INTO `notation` (`id`, `user_id`, `masque_id`, `note`) VALUES
(10, 2, 28, 4);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pseudo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `pseudo`, `avatar`) VALUES
(1, 'normanbelaid@gmail.com', '[\"ROLE_ADMIN\"]', '$2y$13$ogALbxb/kuUxjHnc.PaqmOU9Rx8U8vpK/5r3rHigSTEnTNvFOodOW', 'Admin', '6863eaaaa5590.png'),
(2, 'toto@toto.com', '[\"ROLE_USER\"]', '$2y$13$H7Au/kD9hqcymryg3MwrxudoYwvYQjZDVTdADKHRLNvFfDLk1oJAa', 'Toto', '6863d8c778119.jpg'),
(3, 'plouf@plouf.com', '[\"ROLE_USER\"]', '$2y$13$ebTOd90uZCqXj09wfCNTxeEkDklhdyZ0nPNwXdVinoL7mevp6iipG', 'Plouf', NULL),
(4, 'shadowshen@masques.com', '[\"ROLE_USER\"]', '$2y$13$N4PtNkRSJauo.8v2dP6cWuBWvSSljWkgz2Ib62RdNJKCpiADlwiQi', 'Shen.', '6863ade8c8227.jpg'),
(5, 'virtuosojhin@masques.com', '[\"ROLE_USER\"]', '$2y$13$V9B42D93uH5t9fJsDERYuurQ3ONar3FCUCwfsU9Q6/lKS99OVbnYG', 'Jhin', NULL),
(6, 'Kindred@masques.com', '[\"ROLE_USER\"]', '$2y$13$JNmVGXai84Masbu8zng4s.7SJLyvIG5B46X6Cyi2ScU9mYYVK53Fm', 'Kindred', NULL),
(7, 'shadowmasterzed@masques.com', '[\"ROLE_USER\"]', '$2y$13$lv5PFaRUn/QGf4YEEfLyDO1NQlj7QoXLEUOqbT8s96RAXe2.DxLS.', 'Zed', NULL),
(8, 'pyke@masques.com', '[\"ROLE_USER\"]', '$2y$13$xUp2fFfR73Y6j9RZXPbTQ.0uFGDNtT5mWypdNX5a0SXA4tJAa14Ou', 'Pyke', NULL),
(9, 'tribalbantu@masques.com', '[\"ROLE_USER\"]', '$2y$13$ks5iJ3MGeBsb7g/yvibIO..zKUAYnPW.fRMLegtMYdbMGTo/603BG', 'Bantu', NULL),
(10, 'yorubamystic@masques.com', '[\"ROLE_USER\"]', '$2y$13$gOoWbKJEWiQddDp8vViKFeOsv2FpfJ4QxtZBXgF1ae1gg9fjQ4nj6', 'Yoruba', NULL),
(11, 'dogonoracle@masques.com', '[\"ROLE_USER\"]', '$2y$13$9/gP214dg5qQtXOKqcGEoeZeyxT7EsZDBz6ZNWWW0uaAs.2H8dWoW', 'Dogon', NULL),
(12, 'test@masques.com', '[\"ROLE_USER\"]', '$2y$13$f0x/FDheCVjiq9Aw6BrINO/Ct8v231.WZFV8.rJpflEKU0IUG8CWu', 'test', NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `FK_67F068BCA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_67F068BCEE50B206` FOREIGN KEY (`masque_id`) REFERENCES `masque` (`id`);

--
-- Contraintes pour la table `masque`
--
ALTER TABLE `masque`
  ADD CONSTRAINT `FK_E2D3F6ABA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_E2D3F6ABB03A8386` FOREIGN KEY (`created_by_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `notation`
--
ALTER TABLE `notation`
  ADD CONSTRAINT `FK_268BC95A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_268BC95EE50B206` FOREIGN KEY (`masque_id`) REFERENCES `masque` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
