<?php

namespace App\Models;

use App\Enums\Question\Difficulty;
use App\Enums\Question\Type;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = ['text', 'type', 'category_id', 'difficulty', 'programming_langguage_id', 'correct_answer'];


    protected $casts = [
        // 'options' => 'array',
        'difficulty' => Difficulty::class,
        'type' => Type::class,
        'created_at' => 'date'
    ];

    // Append the custom 'type' attribute to the model's array form
    protected $appends = ['type_display', 'difficulty_display','langguage_display'];

    public function getTypeDisplayAttribute()
    {
        return $this->type ? $this->type->label() : null;
    }

    public function getLangguageDisplayAttribute()
    {
        return $this->programming_langguage_id ? $this->programming_langguage->name : null;
    }

    public function getDifficultyDisplayAttribute()
    {
        return $this->difficulty ? $this->difficulty->label() : null;
    }

    // This is where you define the custom format for the 'created_at' field
    public function getCreatedAtAttribute($value)
    {
        // Format the date in the way you want. For example, 'd/m/Y H:i:s'.
        return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
    }
    // This is where you define the custom format for the 'created_at' field
    public function getUpdatedAtAttribute($value)
    {
        // Format the date in the way you want. For example, 'd/m/Y H:i:s'.
        return \Carbon\Carbon::parse($value)->format('d/m/Y H:i:s');
    }

    public function options()
    {
        return $this->hasMany(QuestionOption::class);
    }

    public function code_output()
    {
        return $this->hasOne(QuestionCodeOutput::class)->withDefault();
    }
    
    public function programming_langguage()
    {
        return $this->belongsTo(QuestionProgrammingLangguage::class,'programming_langguage_id')->withDefault();
    }
}
