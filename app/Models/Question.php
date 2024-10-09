<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = ['text','category_id','difficulty','options','programming_langguage_id','correct_answer'];

      
    protected $cast = [
        'options' => 'array',
    ];
}
