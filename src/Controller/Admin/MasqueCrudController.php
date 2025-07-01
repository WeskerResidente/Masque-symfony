<?php

namespace App\Controller\Admin;

use App\Entity\Masque;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;

class MasqueCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Masque::class;
    }

    public function configureFields(string $pageName): iterable
    {
        yield ImageField::new('imageName', 'Image')
            ->setBasePath('uploads/images') // Ce chemin doit correspondre à ton dossier public
            ->setUploadDir('public/uploads/images') // Dossier physique pour l’upload
            ->setSortable(false);

        yield TextField::new('nom');
        yield TextField::new('caracteristique');
        yield IntegerField::new('valeur');
        yield TextField::new('description');
    }
}
