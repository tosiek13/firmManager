<?php
class baza extends controller
{
 protected $layout ;
 protected $model ;
 function __construct() {
 parent::__construct() ;
 $this->layout = new view('main') ;
$this->model = new model2 ;
 $this->layout->css = $this->css ;
 $this->layout->menu = $this->menu ;
 $this->layout->title = 'Baza danych SQL' ;
 }
 function listAll() {
 $this->layout->header = 'Lista wszystkich rekordow' ;
 $this->view = new view('listAll') ;
 $this->view->data = $this->model->listAll() ;
 $this->layout->content = $this->view ;
 return $this->layout ;
 }

}
?>
