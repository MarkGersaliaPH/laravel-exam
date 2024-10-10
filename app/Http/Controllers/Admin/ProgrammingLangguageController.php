<?php 
namespace App\Http\Controllers\Admin;;

use Markgersaliaph\LaravelCrudGenerate\Http\Controllers\CrudController;

class ProgrammingLangguageController extends CrudController
{
    protected $main_page_route_name = 'admin.programming-langguage.index';
    protected $inertiaMainPage = 'Admin/ProgrammingLangguage/List'; //name of react path to display
    protected $inertiaFormPage = 'Admin/ProgrammingLangguage/Form'; 

    protected $modelName = "QuestionProgrammingLangguage";
}
  