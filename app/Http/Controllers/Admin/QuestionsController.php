<?php 
namespace App\Http\Controllers\Admin;

use App\Enums\Question\Difficulty;
use App\Enums\Question\Type; 
use App\Models\QuestionProgrammingLangguage;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Markgersaliaph\LaravelCrudGenerate\Http\Controllers\CrudController;
use Spatie\Tags\Tag;

class QuestionsController extends CrudController
{
    protected $main_page_route_name = 'admin.questions.index';

    protected $inertiaMainPage = 'Admin/Questions/List'; //name of react path to display
    protected $inertiaFormPage = 'Admin/Questions/Form'; 


    private function getDataToBePassed(){
        $data = [
            'type_options' => Type::options(),
            'difficulty_options' => Difficulty::options(),
            'programming_langguage_options' => QuestionProgrammingLangguage::All(),
            'tag_options' => $this->processTags(),
        ];  
        return $data;

    }

    public function processTags(){
        $tagArr = [];

        foreach (Tag::All() as $key => $tag) {
            array_push($tagArr,["value"=>$tag->slug,"label"=>$tag->name]);
        } 
        
        return $tagArr;
    }

    public function create()
    {
        if ($this->renderByInertia) {
           $data = $this->getDataToBePassed();
           $data['item'] = $this->model(); 
            return Inertia::render($this->getFormPage(), $data);
        }
    }

    public function edit($resource)
    {
        $resource = $this->processResource($resource); 
        $data = $this->getDataToBePassed();
        $data['item'] = $resource; 
        
        
        if ($this->renderByInertia) {
            return Inertia::render($this->getFormPage(), $data);
        }

        return $this->buildJson(['item' => $resource]);
    }
    
    public function eagerLoad(){
        return ['options','code_output','tags'];
    }

    public function afterCreate($r){ 
        $request = request();
 
        if($request->has('options')){
            $r->options()->createMany($request->options);
        } 

        $this->saveTags($r);

        if($request->has('correct_output')){
            $r->code_output()->create(["correct_output"=>$request->correct_output]);
        }
        return $r;
    }

    public function afterUpdate($r){

        $this->saveTags($r);
    }

    public function saveTags($resource){
        
        if(request()->has('tags')){  
            $resource->syncTags(collect(request()->tags)->pluck('value')->toArray());
        }
        
    }

 

  
}
  