<?php

namespace App\Controller\Admin;

use App\Entity\Notation;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;

class NotationCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Notation::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IntegerField::new('note', 'Note')
                ->setHelp('Note sur 5'),

            AssociationField::new('user', 'Utilisateur')
                ->setCrudController(\App\Controller\Admin\UserCrudController::class),

            AssociationField::new('masque', 'Masque')
                ->setCrudController(\App\Controller\Admin\MasqueCrudController::class),
        ];
    }
}
