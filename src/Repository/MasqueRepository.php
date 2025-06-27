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
            $qb = $this->createQueryBuilder('m');

            if (!empty($search->q)) {
                $qb->andWhere('m.Nom LIKE :q')
                ->setParameter('q', '%' . $search->q . '%');
            }

            if (!empty($search->caracteristique)) {
                $qb->andWhere('m.Caracteristique LIKE :carac')
                ->setParameter('carac', '%' . $search->caracteristique . '%');
            }

            if (!empty($search->description)) {
                $qb->andWhere('m.Description LIKE :desc')
                ->setParameter('desc', '%' . $search->description . '%');
            }

            if ($search->min !== null) {
                $qb->andWhere('m.Valeur >= :min')
                ->setParameter('min', $search->min);
            }

            if ($search->max !== null) {
                $qb->andWhere('m.Valeur <= :max')
                ->setParameter('max', $search->max);
            }

            return $qb->orderBy('m.createdAt', 'DESC')
                    ->getQuery()
                    ->getResult();
        }

}
