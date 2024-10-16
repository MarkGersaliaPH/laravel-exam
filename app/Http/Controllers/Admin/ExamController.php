<?php 
namespace App\Http\Controllers\Admin;;

use App\Enums\Question\Difficulty;
use App\Enums\Question\Type;
use App\Models\Question;
use Inertia\Inertia;
use Markgersaliaph\LaravelCrudGenerate\Http\Controllers\CrudController;

class ExamController extends CrudController
{
    protected $main_page_route_name = 'admin.exams.index';

    protected $inertiaMainPage = 'Admin/Exam/List'; //name of react path to display
    protected $inertiaFormPage = 'Admin/Exam/Form'; 

    
    private function getDataToBePassed(){
        $data = [ 
            'difficulty_options' => Difficulty::options(), 
            'question_options' => Question::All(), 
            'type_options' => Type::cases(), 
        ];  
        return $data; 
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
    
    
    public function beforeCreate($r){
        $r->created_by = auth()->id();

        return $r;
    }

    public function afterCreate($r){
        
        $r->questions()->attach(1);
        $r;
    }

    public function eagerLoad(){
        return ['creator'];
    }
}
  