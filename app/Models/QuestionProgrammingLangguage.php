<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionProgrammingLangguage extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function question(){
        return $this->hasMany(Question::class);
    }
}
