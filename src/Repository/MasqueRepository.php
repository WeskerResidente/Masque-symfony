<?php

namespace App\Repository;

use App\Entity\Masque;
use App\Data\SearchData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Masque>
 */
class MasqueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Masque::class);
    }

    /**
     * Recherche personnalisée avec filtres dynamiques
     * 
     * @param SearchData $search
     * @return Masque[]
     */
    public function findSearch(SearchData $search): array
    {
        $query = $this->createQueryBuilder('m');


    if (!empty($search->q)) {
        $query->andWhere('m.Nom LIKE :q OR m.Description LIKE :q OR m.Caracteristique LIKE :q')
              ->setParameter('q', '%' . $search->q . '%');
    }

        if ($search->min !== null) {
            $query->andWhere('m.Valeur >= :min')
               ->setParameter('min', $search->min);
        }

        if ($search->max !== null) {
            $query->andWhere('m.Valeur <= :max')
               ->setParameter('max', $search->max);
        }


        return $query->orderBy('m.createdAt', 'DESC')
                    ->getQuery()
                    ->getResult();
        }
}
