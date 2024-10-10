<?php
namespace App\Enums\Question;

enum Difficulty:int{ 
    case BEGINNER = 1;
    case INTERMEDIATE = 2;
    case ADVANCE = 3;

     
    // Method to return human-readable labels
    public function label(): string {
        return match($this) {
            self::BEGINNER => 'Beginner',
            self::INTERMEDIATE => 'Intermediate',
            self::ADVANCE => 'Advance',
        };
    }

    public static function options(){
        $arr = [];
        foreach (self::cases() as $key => $option) {
            $arr[] = ["id"=>$option->value,"text"=>$option->label()];
        }

        return $arr;
    }

}