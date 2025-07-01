<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250701091550 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE masque ADD user_id INT DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE masque ADD CONSTRAINT FK_E2D3F6ABA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)
        SQL);
        $this->addSql(<<<'SQL'
            CREATE INDEX IDX_E2D3F6ABA76ED395 ON masque (user_id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE masque DROP FOREIGN KEY FK_E2D3F6ABA76ED395
        SQL);
        $this->addSql(<<<'SQL'
            DROP INDEX IDX_E2D3F6ABA76ED395 ON masque
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE masque DROP user_id
        SQL);
    }
}
