<?php

// src/Data/SearchData.php
namespace App\Data;

class SearchData
{
    public ?string $q = '';
    public ?int $min = null;
    public ?int $max = null;
    public ?string $caracteristique = '';
    public ?string $description = '';
}
