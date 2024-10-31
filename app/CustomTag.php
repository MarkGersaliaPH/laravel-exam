<?php
namespace App;

use Spatie\Tags\Tag;

class CustomTag  extends Tag
{
    protected $table = ['tags'];

    public static function getTagsToArray(){
        $tagArr = []; 
        foreach (Tag::All() as $key => $tag) {
            array_push($tagArr,["value"=>$tag->slug,"label"=>$tag->name]);
        } 
        
        return $tagArr;
    }

    public function saveTags($resource){
        
        if(request()->has('tags')){  
            $resource->syncTags(collect(request()->tags)->pluck('value')->toArray());
        }
        
    }

     
}