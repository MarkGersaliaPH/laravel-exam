<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuestionCodeOutput extends Model
{
    use HasFactory;

    protected $fillable = [
        'question_id',
        'output',
        'correct_output',
    ];
}
