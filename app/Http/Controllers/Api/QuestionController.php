<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //
    
    public function index(Request $request){   
        $questions = Question::when($request->text,function($q) use ($request) {
            $q->where('text', 'LIKE', "%{$request->text}%");
        })
        ->when($request->difficulty,function($q) use ($request) {
            $q->where('difficulty',$request->difficulty);
        })
        ->when($request->tags,function($q)use($request){ 
                $tagCollect = collect($request->tags)->pluck('value')->toArray();  
                $q->withAnyTags($tagCollect);
        })
        ->get();
        return response()->json($questions);
    }
}
