<?php

namespace App\Models;

use App\Enums\Question\Difficulty;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Tags\HasTags;

class Exam extends Model
{
    use HasFactory;

    use HasTags;

    protected $fillable = ['name','time_limit','description','difficulty','created_by'];
    
    // Append the custom 'type' attribute to the model's array form
    protected $appends = ['difficulty_display','display_tags'];

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

    
    public function getDisplayTagsAttribute(){
        $tagArr = [];
        foreach ($this->tags as $key => $tag) {
            array_push($tagArr,["value"=>$tag->slug,"label"=>$tag->name]);
        }  
        return $tagArr;
        
    }
}
