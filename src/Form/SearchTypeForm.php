<?php

// src/Form/SearchFormType.php
namespace App\Form;

use App\Data\SearchData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SearchTypeForm extends AbstractType
{
    // Caractéristique des valeur de la recherche
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('q', TextType::class, [
                'required' => false,
                'label' => false,
                'attr' => ['placeholder' => 'Rechercher un masque...']
            ])
            ->add('min', IntegerType::class, ['required' => false, 'label' => 'Valeur minimale'])
            ->add('max', IntegerType::class, ['required' => false, 'label' => 'Valeur maximale'])
            ->add('caracteristique', TextType::class, ['required' => false])
            ->add('description', TextType::class, ['required' => false]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => SearchData::class,
            'method' => 'GET',
            'csrf_protection' => false,
        ]);
    }
}
