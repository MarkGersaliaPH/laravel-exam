<?php
namespace App;

use Spatie\Tags\Tag;

class CustomTag extends Tag
{
    public function getTagsToArray(){
        return $this->pluck('name')->toArray();
    }
}