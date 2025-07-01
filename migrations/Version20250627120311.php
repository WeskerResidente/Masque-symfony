<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250627120311 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE notation (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, masque_id INT NOT NULL, note INT NOT NULL, INDEX IDX_268BC95A76ED395 (user_id), INDEX IDX_268BC95EE50B206 (masque_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE notation ADD CONSTRAINT FK_268BC95A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE notation ADD CONSTRAINT FK_268BC95EE50B206 FOREIGN KEY (masque_id) REFERENCES masque (id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE notation DROP FOREIGN KEY FK_268BC95A76ED395
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE notation DROP FOREIGN KEY FK_268BC95EE50B206
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE notation
        SQL);
    }
}
