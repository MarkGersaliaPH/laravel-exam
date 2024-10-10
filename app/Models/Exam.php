<?php

namespace App\Models;

use App\Enums\Question\Difficulty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;

    protected $fillable = ['name','time_limit','description','difficulty','created_by'];
    
    // Append the custom 'type' attribute to the model's array form
    protected $appends = ['difficulty_display'];

    public function getDifficultyDisplayAttribute()
    {
        return $this->difficulty ? $this->difficulty->label() : null;
    }

    protected $casts = [
        // 'options' => 'array',
        'difficulty' => Difficulty::class, 
    ];


    public function creator(){
        return $this->belongsTo(User::class,'created_by');
    }
    
    public function questions(){
        return $this->belongsToMany(Question::class);
    }
}
