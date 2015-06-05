<?php
abstract class controller {
 protected $css ;
 protected $menu ;

 function __construct() {
 $this->css = '' ;
 $this->menu = '' ;
 }
 static function http404() {
 header('HTTP/1.1 404 Not Found') ;
 print '<!doctype html><html><head><title>404 Not
Found</title></head><body><p>Invalid URL</p></body></html>' ;
 exit ;
 }
 function __call($name, $arguments)
 {
 self::http404();
 }
}
?>
