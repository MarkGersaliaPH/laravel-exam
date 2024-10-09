<?php 
namespace App\Http\Controllers\Admin;;

use Illuminate\Support\Arr;
use Markgersaliaph\LaravelCrudGenerate\Http\Controllers\CrudController;

class QuestionsController extends CrudController
{
    protected $main_page_route_name = 'admin.questions.index';

    protected $inertiaMainPage = 'Admin/Questions/List'; //name of react path to display
    protected $inertiaFormPage = 'Admin/Questions/Form'; 

  
}
  