<?php
class model2
{
static $dsn = 'sqlite:sql/baza.db' ;
 protected static $db ;
 private $sth ;
 function __construct()
 {
 self::$db = new PDO ( self::$dsn ) ;
 self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION) ;
 }
 public function listAll()
 {
 $this->sth = self::$db->prepare('SELECT * FROM osoba') ;
 $this->sth->execute() ;
 $result = $this->sth->fetchAll() ;
 return $result ;
 }
}
?>
