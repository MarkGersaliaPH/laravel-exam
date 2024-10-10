<?php
namespace App\Enums\Question;

enum Type:int{

    case MULTIPLE_CHOICE = 1;
    case CODE_WRITING = 2;
    // case FILL_IN_THE_BLANK = 3;
     
    // Method to return human-readable labels
    public function label(): string {
        return match($this) {
            self::MULTIPLE_CHOICE => 'Multiple Choice',
            self::CODE_WRITING => 'Code Writing',
            // self::FILL_IN_THE_BLANK => 'Fill in the Blank',
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