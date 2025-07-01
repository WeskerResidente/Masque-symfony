<?php

namespace App\Entity;

use App\Entity\User;
use App\Entity\Commentaire;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\MasqueRepository;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\HttpFoundation\File\File;
use Doctrine\Common\Collections\ArrayCollection;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Vich\UploaderBundle\Mapping\Annotation\UploadableField;


#[Vich\Uploadable]
#[ORM\Entity(repositoryClass: MasqueRepository::class)]
class Masque
{
    public function __construct()
    {
        $this->commentaires = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->notations = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
    }
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private ?int $id = null;

    #[UploadableField(mapping: 'images', fileNameProperty: 'imageName')]
    private ?File $imageFile = null;

    #[ORM\Column(nullable: true)]
    private ?string $imageName = null;

    #[ORM\Column(length: 255)]
    private ?string $Nom = null;

    #[ORM\Column(length: 255)]
    private ?string $Caracteristique = null;

    #[ORM\Column]
    private ?int $Valeur = null;

    #[ORM\Column(length: 255)]
    private ?string $Description = null;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->Nom;
    }

    public function setNom(string $Nom): static
    {
        $this->Nom = $Nom;

        return $this;
    }

    public function getCaracteristique(): ?string
    {
        return $this->Caracteristique;
    }

    public function setCaracteristique(string $Caracteristique): static
    {
        $this->Caracteristique = $Caracteristique;

        return $this;
    }

    public function getValeur(): ?int
    {
        return $this->Valeur;
    }

    public function setValeur(int $Valeur): static
    {
        $this->Valeur = $Valeur;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->Description;
    }

    public function setDescription(string $Description): static
    {
        $this->Description = $Description;

        return $this;
    }

        public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageFile(?File $imageFile = null): void
    {
        $this->imageFile = $imageFile;

        if ($imageFile !== null) {
            $this->updatedAt = new \DateTimeImmutable();
        }
    }
    public function getImageName(): ?string
    {
        return $this->imageName;
        }
        public function setImageName(?string $imageName): void
    {
        $this->imageName = $imageName;
    }
    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $updatedAt = null;

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }
    #[ORM\OneToMany(mappedBy: 'masque', targetEntity: Commentaire::class, cascade: ['persist', 'remove'])]
    private Collection $commentaires;

    public function getCommentaires(): Collection
    {
        return $this->commentaires;
    }
    #[ORM\ManyToOne(inversedBy: 'masques')]
    private ?User $createdBy = null;
    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $user): static
    {
        $this->createdBy = $user;
        return $this;
    }
    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }
    #[ORM\OneToMany(mappedBy: 'masque', targetEntity: Notation::class, cascade: ['remove'], orphanRemoval: true)]
    private Collection $notations;

    public function getNotations(): Collection
    {
        return $this->notations;
    }

    public function getAverageNote(): ?float
    {
        if ($this->notations->isEmpty()) return null;

        $sum = array_reduce($this->notations->toArray(), fn($carry, $notation) => $carry + $notation->getNote(), 0);
        return round($sum / count($this->notations), 1);
    }

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'masques')]
    private ?User $user = null;

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;
        return $this;
    }
}
