<?php

namespace App\Http\Controllers\Api;

use App\CustomTag;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Tags\Tag;

class TagsController extends Controller
{
    //
    public function index(Request $request){  
        $tags = CustomTag::getTagsToArray();
        return response()->json($tags);
    }
}
