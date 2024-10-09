<?php 
namespace App\Http\Controllers\Admin;;

use Markgersaliaph\LaravelCrudGenerate\Http\Controllers\CrudController;

class CategoryController extends CrudController
{
    protected $main_page_route_name = 'admin.categories.index';

    protected $inertiaMainPage = 'Admin/Category/List'; //name of react path to display
    protected $inertiaFormPage = 'Admin/Category/Form'; 
}
  